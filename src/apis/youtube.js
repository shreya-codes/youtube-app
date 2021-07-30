import axios from 'axios';
const KEY = 'AIzaSyChPNS_v_lfd6DBNWavKnZgw0xmjzl5PUk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});