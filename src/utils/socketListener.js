import { socketIOClient } from "socket.io-client";
import { SERVER_URL } from "../config/hosts";

function listenToQueueEvents(queueGuid) {
  const socket = socketIOClient(`${SERVER_URL}/${queueGuid}`);
  socket.on("added", (data) => {
    console.log(data);
  });
  socket.on("removed", (data) => {
    console.log(data);
  });
}
