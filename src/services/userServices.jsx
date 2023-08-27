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

}

class CryptoAPIKeys {

    addCryptoAPIKeys(data) {
        return $api.post('user/cryptoapikeys', data)
    }

    getCryptoAPIKeys(filter) {
        return $api.get('user/cryptoapikeys', {params: {filter} })
    }

    deleteCryptoAPIKeys(keysId) {
        return $api.delete(`user/cryptoapikeys/${keysId}`)
    }
}


class UserBotsService {
    addBot(data) {
        return $api.post(`user/bot`, data)
    }

    getBots() {
        return $api.get('user/bot')
    }

    changeIsActive(botId, isActive) {
        return $api.patch(`user/bot/${botId}`, {is_active: isActive})
    }
}

export const authServices = new AuthServices()
export const userServices = new UserServices()
export const cryptoAPIKeys = new CryptoAPIKeys()
export const userBotsService = new UserBotsService()