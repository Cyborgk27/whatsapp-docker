import { Socket } from 'npm:socket.io';
import { DefaultEventsMap } from 'npm:socket.io/dist/typed-events';

export default function connectionEvent(socket: Socket<DefaultEventsMap, DefaultEventsMap>) {
    console.log('User connected with WebSocket');
    
    socket.on('disconnect', () => {
        console.log('User disconnected with WebSocket');
    });
}