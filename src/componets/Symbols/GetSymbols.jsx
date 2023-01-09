import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Select from "react-select";
import {CryptoServices} from "../../services/CryptoServices";

export const GetSymbols = () => {
    const [symbols: Array, setSymbols] = useState([{value:"BTCUSDT", label:"BTCUSDT"}]);
    const currentSymbol =JSON.parse(localStorage.getItem('symbol'))

    useEffect(() => {
        const cryptoServices = new CryptoServices()
        cryptoServices.allSymbols()
            .then(response => {
                const result = [];
                response.data.map(value => result.push({value, label: value}));
                setSymbols(result);
            })
            .catch(error => alert(error));
    }, []);

    const changeSymbol = (value) => {
    if (value) localStorage.setItem('symbol', JSON.stringify(value));
    }

    return (
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={currentSymbol}
                isDisabled={false}
                isLoading={false}
                isClearable={true}
                isRtl={false}
                isSearchable={true}
                name="symbols"
                options={symbols}
            onChange={changeSymbol}
        />
    );
}
