import { serverInstance } from "./instances";

export async function getQueueRequest(guid) {
   const queue = (await serverInstance.get(`/queues/${guid}`)).data;
   return queue
}

export async function createQueueRequest() {
    const queueGuid = (await serverInstance.post(`/queues`)).data;
    return queueGuid;
}