import axios from 'axios';
import { YOUTUBE_API_URL, YOUTUBE_AUTH } from './constants';

const youtubeInstance = axios.create({
    baseURL: YOUTUBE_API_URL,
});

youtubeInstance.interceptors.request.use(config => {
    config.params = {
        key: YOUTUBE_AUTH,
        ...config.params
    };
    return config;
});

export { 
    youtubeInstance
}