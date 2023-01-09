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
    })

    useEffect(() => {
        const cryptoServices = new CryptoServices()
        cryptoServices.get_bot().then(res => {
            console.log(res)
            setData(res.data)
        })
    }, [])
    return (
        <div>
            <Tabs
                defaultActiveKey="BTCUSDT"
                id="uncontrolled-tab-example"
                className="mb-3"
                fill
            >
                <Tab eventKey="XRPUSDT" title="XRPUSDT">
                    <Sonnet data={data.XRPUSDT} key={data.XRPUSDT}/>
                </Tab>
                <Tab eventKey="BTCUSDT" title="BTCUSDT">
                    <Sonnet data={data.BTCUSDT} key={data.BTCUSDT} />
                </Tab>
                <Tab eventKey="ETHUSDT" title="ETHUSDT">
                    <Sonnet data={data.ETHUSDT} key={data.ETHUSDT} />
                </Tab>
                <Tab eventKey="BNBUSDT" title="BNBUSDT">
                    <Sonnet data={data.BNBUSDT} key={data.BNBUSDT} />
                </Tab>
            </Tabs>
        </div>
    )
}
