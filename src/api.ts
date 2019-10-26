import axios from 'axios';

const URL = '127.0.0.1:4000';
const ENTRYPOINT = URL + '/api/v0';

export default {
    login() {
        return axios.get(ENTRYPOINT + '/auth/login');
    },

};
