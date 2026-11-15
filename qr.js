// QR code drawing and camera scanning for the hotspot connection flow.
import qrcode from 'qrcode-generator';
import jsQR from 'jsqr';

let camStream = null;

// Opening the camera also makes browsers reveal real local IPs (instead of hidden
// ".local" names), which hotspot play needs. Keep it open during the whole flow.
export async function openCamera() {
  if (camStream) return camStream;
  try {
    camStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
  } catch {
    camStream = null;
  }
  return camStream;
}

export function closeCamera() {
  if (camStream) camStream.getTracks().forEach((t) => t.stop());
  camStream = null;
}

export function drawQr(canvas, text, px = 260) {
  const qr = qrcode(0, 'M');
  qr.addData(text);
  qr.make();
  const n = qr.getModuleCount(), quiet = 3, cell = Math.floor(px / (n + quiet * 2));
  const size = cell * (n + quiet * 2);
  canvas.width = canvas.height = size;
  const g = canvas.getContext('2d');
  g.fillStyle = '#fff'; g.fillRect(0, 0, size, size);
  g.fillStyle = '#000';
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (qr.isDark(r, c)) g.fillRect((c + quiet) * cell, (r + quiet) * cell, cell, cell);
}

// Starts scanning into <video>; calls onCode(text) once, then stops. Returns a stop function.
export async function startScan(video, onCode) {
  const stream = await openCamera();
  if (!stream) return null;
  video.srcObject = stream;
  video.setAttribute('playsinline', '');
  video.muted = true;
  await video.play().catch(() => {});
  const cv = document.createElement('canvas');
  const g = cv.getContext('2d', { willReadFrequently: true });
  let stopped = false;
  const timer = setInterval(() => {
    if (stopped || video.readyState < 2 || !video.videoWidth) return;
    const w = 360, h = Math.round((video.videoHeight / video.videoWidth) * w);
    cv.width = w; cv.height = h;
    g.drawImage(video, 0, 0, w, h);
    const res = jsQR(g.getImageData(0, 0, w, h).data, w, h, { inversionAttempts: 'dontInvert' });
    if (res && res.data.startsWith('JA1|')) { stopped = true; clearInterval(timer); onCode(res.data); }
  }, 180);
  return () => { stopped = true; clearInterval(timer); video.srcObject = null; };
}
