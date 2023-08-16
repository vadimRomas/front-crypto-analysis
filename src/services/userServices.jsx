import axios from "axios";
import $api from "./intercaptor";
import {url} from "../state/enviroment";


class AuthServices {

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

class UserServices {

    get_user() {
        return $api.get('user')
    }

    put(userData) {
        return $api.put('user/', userData)
    }

    delete() {
        return $api.delete('user/')
    }

    addCryptoAPIKeys(data) {
        return $api.post('user/cryptoapikeys', data)
    }

    getCryptoAPIKeys() {
        return $api.get('user/cryptoapikeys')
    }

}

class CryptoAPIKeys {

    addCryptoAPIKeys(data) {
        return $api.post('user/cryptoapikeys', data)
    }

    getCryptoAPIKeys() {
        return $api.get('user/cryptoapikeys')
    }

    deleteCryptoAPIKeys(keysId) {
        return $api.delete(`user/cryptoapikeys/${keysId}`)
    }
}

export const authServices = new AuthServices()
export const userServices = new UserServices()
export const cryptoAPIKeys = new CryptoAPIKeys()
