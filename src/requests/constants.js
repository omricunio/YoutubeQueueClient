

export const KEYS = [
    "AIzaSyD70Yu1wDCD1_ORTzjmEtrt8aPgUqEK0cY"
];

export const getRandomAPIKey = () => {
    return KEYS[Math.floor(Math.random() * KEYS.length)];
}