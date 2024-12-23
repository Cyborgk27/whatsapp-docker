import IOwebSocket from '../../websocket/index.ts';

export default function qrEvent(qr: string) {
    console.log(qr);
    IOwebSocket.emit('qrcode', qr);
}