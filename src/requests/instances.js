import axios from 'axios';
import { YOUTUBE_API_URL, getRandomAPIKey } from './constants';

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

export { 
    youtubeInstance
}