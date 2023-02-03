import {useEffect, useState} from "react";
import {CryptoServices} from "../../services/CryptoServices";
import {Tab, Tabs} from "react-bootstrap";
import {Sonnet} from "./Sonnet";

export const TradingBot = () => {
    const [data, setData] = useState({
        XRPUSDT: [],
        BTCUSDT: [],
        ETHUSDT: [],
        BNBUSDT: []
    });

    useEffect(() => {
        const cryptoServices = new CryptoServices();
        cryptoServices.get_bot().then(res => {
            let result = {};
            res.data.map(value => {
                if (result[value.symbol]) {
                    result[value.symbol].push(value);
                    return
                }
                result[value.symbol] = [value];
            });

            Object.entries(result).map(value => value[1].sort((a, b) => new Date(a.time) - new Date(b.time)));

            setData(result);
        });
    }, []);

    return (
        <div>
            <Tabs
                defaultActiveKey={Object.keys(data)[0]}
                id="uncontrolled-tab-example"
                className="mb-3"
                fill
            >
                {
                    Object.entries(data).map((value) =>
                        <Tab eventKey={value[0]} title={value[0]}>
                            <Sonnet data={value[1]} key={value[0]}/>
                        </Tab>
                    )
                }
            </Tabs>
        </div>
    )
}
