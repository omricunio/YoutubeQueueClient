

export const KEYS = [
    "AIzaSyCdVPpg1hyjJ4c6mx5Rer4Lg1pSUwsSlPQ"
];

export const getRandomAPIKey = () => {
    return KEYS[Math.floor(Math.random() * KEYS.length)];
}