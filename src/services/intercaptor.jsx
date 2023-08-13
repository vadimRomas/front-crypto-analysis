import axios from 'axios'


const $api = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/',

})

$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access')}`
    return config;
})


export default $api;
