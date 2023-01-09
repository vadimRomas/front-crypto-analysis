import axios from "axios";
import {url, ws} from "../state/enviroment";
import {w3cwebsocket as W3CWebSocket} from "websocket";

export class CryptoServices {
    constructor() {
        this.url = `${url}crypto/`
    }

    searchBigGamer() {
        return axios.get(`${this.url}kit`)
    }

    allSymbols() {
        return axios.get(`${this.url}symbols`)
    }

    dataForGraphs(symbol: string, time: string) {
        return axios.get(`${this.url}?symbol=${symbol}&time=${time}`)
    }
    get_bot() {
        return axios.get(`${this.url}tradingview_bot`)
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
