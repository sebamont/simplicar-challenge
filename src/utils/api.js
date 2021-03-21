import axios from 'axios';
let api = axios.create({
    headers:{
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`
    }
})

export default api;