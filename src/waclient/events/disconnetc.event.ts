import IOWebSocket from '../../websocket/index.ts';

export default async function disconnectedEvent(reason: string) {
    console.log('WAClient disconnected');
    IOWebSocket.emit('waclient_status', false);
}