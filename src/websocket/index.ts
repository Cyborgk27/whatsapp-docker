import { Server } from 'npm:socket.io';
import server from '../server/index.ts';
import connectionEvent from "./events/connection.event.ts";

const WebSocket = new Server(server);

WebSocket.on('connection', connectionEvent);

export default WebSocket;