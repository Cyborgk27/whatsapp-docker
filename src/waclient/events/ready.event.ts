import IOWebSocket from "../../websocket/index.ts";

export default function readyEvent() {
    console.log("WAClient is ready");
    IOWebSocket.emit("waclient_status", true);
}
