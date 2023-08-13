import {useEffect, useState} from "react";
import {CryptoServices} from "../../services/CryptoServices";
import {GetSymbols} from "./GetSymbols";

export function InfoAboutCrypto() {
    const [price, setPrice] = useState('loading...');
    const [data, setData] = useState([{Close: "loading..."}]);

    const symbol = JSON.parse(localStorage.getItem('symbol'));

    const time = localStorage.getItem('timeFrame') ? JSON.parse(localStorage.getItem('timeFrame')) : '1m';
    useEffect(() => {
        const cryptoServices = new CryptoServices();
        cryptoServices.dataForGraphs(symbol.value, time.value)
            .then(response => {
                setPrice(response.data.slice(-1)[0].Close);
                setData(response.data);
            })
            .catch(error => alert(error));

    }, [symbol.value, time.value]);


    return (
        <div>
            {/*<GetSymbols/>*/}
            {/*<h1>PRICE: {price}</h1>*/}
            {/*<div>Hello World I`m InfoAboutCrypto {symbol ? `${symbol.value} - ${time.value}` : 'loading...'}</div>*/}
            {/*<Graph data={data}/>*/}
        </div>
    );
}
