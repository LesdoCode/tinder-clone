import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://lesdocode-tinder-backend.herokuapp.com/'
});

export default instance;