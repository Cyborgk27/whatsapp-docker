import http from 'node:http';
import app from "../app/index.ts";

const server = http.createServer(app);

export default server;