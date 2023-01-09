import {useEffect, useState} from "react";
import {CryptoServices} from "../../services/CryptoServices";
import {Modal} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
// import {w3cwebsocket as W3CWebSocket} from "websocket";
import {TableForKit} from "./TableForKit";
import {BBAARR} from "./BBAARR";

export const KitComponent = () => {
    const [spotDepths, setSpotDepths] = useState([]);
    const [futureDepths, setFutureDepths] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fullscreen] = useState('sm-down');
    const [dataForBar, setDataForBar] = useState();
    const [labelsForBar, setLabelsForBar] = useState();
    // const [s, swr] = useState();

    useEffect(() => {
        // const client = new W3CWebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_15m'); //gets room_name from the state and connects to the backend server
        // client.onopen = () => {
        //     console.log('WebSocket Client Connected');
        // };

        // console.log(client);
        const cryptoServices = new CryptoServices();
        cryptoServices.searchBigGamer().then((response) => {
            const labels = [];
            const data = {long: [], short: []};
            response.data.long_short_account_ratio.map(value => {
                labels.push(value.symbol);
                data.long.push(+value.longAccount);
                data.short.push(+value.shortAccount);
                return true
            });
            setDataForBar(data);
            setLabelsForBar(labels);
            let future_data = JSON.parse(response.data.future);
            const spot_data = JSON.parse(response.data.spot);

            spot_data.sort((a, b) => b.max_bid.how_much_USDT - a.max_bid.how_much_USDT);
            spot_data.sort((a, b) => b.max_ask.how_much_USDT - a.max_ask.how_much_USDT);

            future_data.sort((a, b) => b.max_bid.how_much_USDT - a.max_bid.how_much_USDT);
            future_data.sort((a, b) => b.max_ask.how_much_USDT - a.max_ask.how_much_USDT);

            setFutureDepths(future_data);
            setSpotDepths(spot_data);
        });
    }, []);

    return (
        <div>
            <p>
                We find big gamers and they will buy these coins at this price. Are you interesting? Then the page for
                you.
            </p>

            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{background: "#F8D7DA"}}>sell</div>
                <div style={{background: "#D1E7DD"}}>buy</div>
            </div>

            <TableForKit data={spotDepths} name="Spot"/>
            <TableForKit data={futureDepths} name="Future"/>
            {dataForBar ? <BBAARR longData={dataForBar.long} shortData={dataForBar.short} labels={labelsForBar}/> : ''}

            <Modal show={isLoading} fullscreen={fullscreen} onHide={() => setIsLoading(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>We run search <Icon.Bicycle/>. Please wait two minutes <Icon.Heart/>.</Modal.Body>
            </Modal>
        </div>
    );
};
