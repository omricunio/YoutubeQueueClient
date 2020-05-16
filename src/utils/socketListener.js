import socketIOClient from "socket.io-client";
import { SERVER_URL } from "../config/hosts";
import { store } from "../index";
import { addItem } from "../reducers/player/actions";

export async function listenToQueueEvents(queueGuid) {
  console.log(`Start listening to queue ${queueGuid}`);
  const socket = socketIOClient(SERVER_URL, {
    query: `queueGuid=${queueGuid}`
  });
  socket.on("added", (item) => {
    store.dispatch(addItem(item));
  });
  socket.on("removed", (data) => {
    console.log(data);
  });
  return new Promise((resolve, reject) => {
    socket.on("connected", (userToken) => {
      resolve(userToken)
    })
    socket.on("connection_error", (error) => {
      reject(error);
    })
  })
}
