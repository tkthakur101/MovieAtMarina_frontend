import axios from 'axios';

export default axios.create({
    baseURL:'http://localhost:9001',
    headers: {"ngrok-skip-browser-warning": "true"}
});