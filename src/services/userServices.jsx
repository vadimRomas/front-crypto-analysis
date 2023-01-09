import axios from "axios";
import $api from "./intercaptor";
import {url} from "../state/enviroment";


export class AuthServices {

    constructor() {
        this.url = `${url}user/`
    }

     login(userData) {
        return axios.post(`${this.url}login`, userData)

    }

    register(userData) {
         return axios.post(`${this.url}register`, userData)
    }

}

export class UserServices {

    get_user() {
        return $api.get('user')
    }

    put(userData) {
        return $api.put('user/', userData)
    }

    delete() {
        return $api.delete('user/')
    }

}