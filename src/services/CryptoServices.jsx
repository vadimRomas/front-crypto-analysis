import axios from "axios";
import {url, ws} from "../state/enviroment";
import {w3cwebsocket as W3CWebSocket} from "websocket";

class CryptoServices {
    constructor() {
        this.url = `${url}crypto/`
    }

    searchBigGamer() {
        return axios.get(`${this.url}kit`)
    }

    allSymbols() {
        return axios.get(`${this.url}symbols`)
    }

    dataForGraphs(symbol, time) {
        return axios.get(`${this.url}?symbol=${symbol}&time=${time}`)
    }
    get_bot() {
        return axios.get(`${this.url}bots/list`)
    }
}

export class CryptoWebSockets {
    constructor() {
        this.url = `${ws}crypto/`
    }

    searchBigGamer() {
        return new W3CWebSocket(ws)
        // return axios.get(`${this.url}kit`)
    }
}

export const cryptoServices = new CryptoServices()