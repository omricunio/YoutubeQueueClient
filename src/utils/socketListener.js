import socketIOClient from "socket.io-client";
import { SERVER_URL } from "../config/config";
import { store } from "../index";
import { deleteItemByIndex } from "../reducers/player/actions";
import { addItemMiddleware } from "../sagas/player/actions";
import { reloadQueue } from "../sagas/queue/actions";

export async function listenToQueueEvents(queueGuid, userId) {
  console.log(`Start listening to queue ${queueGuid}`);
  const socket = socketIOClient(SERVER_URL, {
    query: `queueGuid=${queueGuid}&userId=${userId}`
  });
  socket.on("added", (item) => {
    store.dispatch(addItemMiddleware(item));
  });
  socket.on("removed", (index) => {
    store.dispatch(deleteItemByIndex(Number(index)));
  });
  let firstTimeConnected = true;
  return new Promise((resolve, reject) => {
    socket.on("connected", () => {
      firstTimeConnected = false;
      if(!firstTimeConnected) {
        store.dispatch(reloadQueue());
      }
      resolve()
    })
    socket.on("connection_error", (error) => {
      reject(error);
    })
  })
}
