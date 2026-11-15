// Shrinks a WebRTC data-channel SDP down to ~200 bytes so it fits in a QR code,
// and rebuilds a valid SDP from it on the other side. Pure JS, testable in Node.
// Format: JA1|ufrag|pwd|FINGERPRINT_HEX|p or a|ip/port,ip/port

const TAG = 'JA1';

export function packSdp(sdp) {
  const get = (re) => { const m = sdp.match(re); return m ? m[1].trim() : ''; };
  const ufrag = get(/^a=ice-ufrag:(.+)$/m);
  const pwd = get(/^a=ice-pwd:(.+)$/m);
  const fp = get(/^a=fingerprint:sha-256 (.+)$/m).replace(/:/g, '');
  const setup = get(/^a=setup:(.+)$/m) === 'active' ? 'a' : 'p';
  const cands = [];
  for (const line of sdp.split(/\r?\n/)) {
    const m = line.match(/^a=candidate:\S+ \d+ udp \d+ (\S+) (\d+) typ host/);
    if (m) cands.push([m[1], m[2]]);
  }
  // Hotspots are IPv4. If we have any IPv4 address, drop the rest (IPv6 link-local, mDNS names)
  // so the QR stays small; otherwise keep whatever we found.
  cands.sort((a, b) => score(b[0]) - score(a[0]));
  const v4 = cands.filter(([ip]) => /^\d+\.\d+\.\d+\.\d+$/.test(ip));
  const list = (v4.length ? v4 : cands).slice(0, 2).map(([ip, port]) => `${ip}/${port}`).join(',');
  if (!ufrag || !pwd || !fp) throw new Error('Could not read connection info');
  return [TAG, ufrag, pwd, fp, setup, list].join('|');
}

function score(ip) {
  if (/^\d+\.\d+\.\d+\.\d+$/.test(ip)) return /^(192\.168|10\.|172\.(1[6-9]|2\d|3[01]))/.test(ip) ? 3 : 2;
  if (ip.endsWith('.local')) return 1;
  return ip.toLowerCase().startsWith('fe80') ? 0 : 1;
}

export function unpackSdp(text) {
  const parts = String(text).trim().split('|');
  if (parts.length !== 6 || parts[0] !== TAG) throw new Error('Not a valid Jet Arena code');
  const [, ufrag, pwd, fp, setup, list] = parts;
  if (!/^[0-9A-Fa-f]{64}$/.test(fp)) throw new Error('Bad code (fingerprint)');
  const fpColon = fp.toUpperCase().match(/.{2}/g).join(':');
  const cands = list ? list.split(',').map((c) => c.split('/')) : [];
  const first = cands.find(([ip]) => /^\d+\.\d+\.\d+\.\d+$/.test(ip));
  const lines = [
    'v=0',
    'o=- 1234567890 2 IN IP4 127.0.0.1',
    's=-',
    't=0 0',
    'a=group:BUNDLE 0',
    'a=msid-semantic: WMS',
    `m=application ${first ? first[1] : 9} UDP/DTLS/SCTP webrtc-datachannel`,
    `c=IN IP4 ${first ? first[0] : '0.0.0.0'}`,
    ...cands.map(([ip, port], i) => `a=candidate:${1000 + i} 1 udp ${2122260223 - i} ${ip} ${port} typ host generation 0`),
    `a=ice-ufrag:${ufrag}`,
    `a=ice-pwd:${pwd}`,
    `a=fingerprint:sha-256 ${fpColon}`,
    `a=setup:${setup === 'a' ? 'active' : 'actpass'}`,
    'a=mid:0',
    'a=sctp-port:5000',
    'a=max-message-size:262144',
  ];
  return lines.join('\r\n') + '\r\n';
}
