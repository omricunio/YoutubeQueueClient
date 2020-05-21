import axios from 'axios';
import { getRandomAPIKey } from './constants';
import { YOUTUBE_API_URL, SERVER_URL } from '../config/hosts';

const youtubeInstance = axios.create({
    baseURL: YOUTUBE_API_URL,
});

youtubeInstance.interceptors.request.use(config => {
    config.params = {
        key: getRandomAPIKey(),
        ...config.params
    };
    return config;
});

export const serverInstance = axios.create({
    baseURL: SERVER_URL
})

export { 
    youtubeInstance
}