import assert from 'node:assert/strict';
import { packSdp, unpackSdp } from '../src/sdpcodec.js';

const FP = '6E:3B:0A:91:7C:D2:44:1F:AA:09:BE:55:C3:21:87:60:12:FE:9D:48:B7:03:5A:E1:CC:2F:76:8B:D4:19:A0:3E';
const offer = [
  'v=0', 'o=- 4611731400430051336 2 IN IP4 127.0.0.1', 's=-', 't=0 0', 'a=group:BUNDLE 0', 'a=extmap-allow-mixed',
  'a=msid-semantic: WMS', 'm=application 56142 UDP/DTLS/SCTP webrtc-datachannel', 'c=IN IP4 192.168.43.1',
  'a=candidate:2999745851 1 udp 2122260223 192.168.43.1 56142 typ host generation 0 network-id 1 network-cost 10',
  'a=candidate:1234 1 udp 2122194687 fe80::1c2:3ff:fe4:5 51000 typ host generation 0 network-id 2',
  'a=candidate:5555 1 tcp 1518280447 192.168.43.1 9 typ host tcptype active generation 0',
  'a=ice-ufrag:eJ0o', 'a=ice-pwd:Yq3kLm9PzX2vNb7QwErTyUiO', 'a=ice-options:trickle',
  `a=fingerprint:sha-256 ${FP}`, 'a=setup:actpass', 'a=mid:0', 'a=sctp-port:5000', 'a=max-message-size:262144', '',
].join('\r\n');

const packed = packSdp(offer);
console.log('packed (' + packed.length + ' bytes):', packed);
assert.ok(packed.length < 260, 'fits easily in a QR code');
assert.ok(!packed.includes('tcp'));

const back = unpackSdp(packed);
for (const needle of ['a=ice-ufrag:eJ0o', 'a=ice-pwd:Yq3kLm9PzX2vNb7QwErTyUiO', `a=fingerprint:sha-256 ${FP}`,
  '192.168.43.1 56142 typ host', 'a=setup:actpass', 'm=application 56142 UDP/DTLS/SCTP webrtc-datachannel', 'c=IN IP4 192.168.43.1']) {
  assert.ok(back.includes(needle), 'rebuilt SDP has ' + needle);
}
// IPv6 link-local is dropped when an IPv4 address exists.
assert.ok(!back.includes('fe80::'));

const answer = packSdp(offer.replace('actpass', 'active'));
assert.ok(unpackSdp(answer).includes('a=setup:active'));

assert.throws(() => unpackSdp('hello'), /valid/);
assert.throws(() => unpackSdp('JA1|a|b|zz|p|'), /Bad code/);
assert.throws(() => packSdp('v=0'), /Could not read/);
console.log('\n3 sdp codec tests passed');
