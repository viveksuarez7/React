import axios from 'axios';
const KEY ='AIzaSyCCKfH6Gcqsk7K_uSp-Fj4GtWyuHNhKeb0';

export default axios.create({
    baseUrl: "https://www.googleapis.com/youtube/v3",
    params: {
        part:'snippet',
        type:'video',
        maxResults:5,
        key: KEY
    }
})