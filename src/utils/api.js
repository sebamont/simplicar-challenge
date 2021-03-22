import axios from 'axios';
let api = axios.create({
    headers:{
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`
    }
})
export const imgUrlBase = 'https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com/';

export default api;
