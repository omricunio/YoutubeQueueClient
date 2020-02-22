export const YOUTUBE_API_URL = "https://content.googleapis.com/youtube/v3/";

export const KEYS = [
    "AIzaSyBC_CR1Z9Fd5FV57Hp-R11wnH4UAsd9jI8",
    "AIzaSyBfzuwEnl0-51ACCANHVCK38Pxlo9GfcbQ",
    "AIzaSyBK9ooS-eIuV151Z8qdRPfgc6duisYC_wY",
    "AIzaSyB_idwNH2d9pNaZiYfqNBpEcHagQEVQxEY",
    "AIzaSyAt1Jqpn7AnZnh2EK-ucxuRJlWrHiaG3es",
    "AIzaSyDFWmDj4w4-jy12Il3TilTWUNrxiCCXd24",
    "AIzaSyCTmpI4aGi7Q4KE9Md6qyyF-7nlaS3HdlU",
    "AIzaSyBcYufMapxFZ84bH4N3BrXQV1erldFx4e4",
    "AIzaSyDjh3Fgufk5JEwadqHqrPgQ8iZ3LeSSaBI",
    "AIzaSyBZxnxXeAocp9fsRDMHbGuRcpclzEej7ws",
    "AIzaSyBoQbEdmqIes4lZJsu1s6Qm8Bqo2xzP9UM",
    "AIzaSyDoKO3yUS9d7jBiCaL8r5eBokBnUC2FwDg",
    "AIzaSyD-8qTCojul2UueBQhodPMPPLTpRYHWsh4",
    "AIzaSyDoKO3yUS9d7jBiCaL8r5eBokBnUC2FwDg"
];

export const getRandomAPIKey = () => {
    return KEYS[Math.floor(Math.random() * KEYS.length)];
}