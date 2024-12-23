import server from "./server/index.ts";
import './waclient/index.ts';
import './websocket/index.ts';

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});