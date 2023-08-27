import {Button, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import style from "./trading-bot.module.css"
import {cryptoAPIKeys, userBotsService} from "../../services/userServices";
import {cryptoServices} from "../../services/CryptoServices";
import {timeFrame} from "../../state/timeFrame";

export const FormUserAddBot = ({botId, setIsShowForm}) => {
    const [data, setData] = useState({
        symbol: '',
        interval: '',
        cryptoAPIKeys: '',
        bot: botId,
    })
    const [symbols, setSymbols] = useState([])
    const [listAPIKeys, setListAPIKeys] = useState([])

    const addBot = () => {
        userBotsService.addBot(data).then(res => setIsShowForm(false))
    }

    const fetchCryptoAPIKeys = () => {
        cryptoAPIKeys.getCryptoAPIKeys('free')
            .then(res => setListAPIKeys(res.data))
            .catch(error => {
                setIsShowForm(false)
                if (error.response.status === 404) {
                    alert("You don't have any free crypto API keys.")
                } else {
                    alert(error)
                }
            }) // todo notification
    }

    const fetchSymbols = () => {
        cryptoServices.allSymbols()
            .then(response => {
                const result = [];
                response.data.map(value => result.push({value, label: value}));
                setSymbols(result);
            })
            .catch(error => alert(error));
    }

    useEffect(() => {
        fetchSymbols()
        fetchCryptoAPIKeys()
    }, []);

    return (
        <div className={style.formAddBot}>
            <Form>

                <Form.Group className={`form-group ${style.formGroup}`}>
                    <Form.Label>symbol</Form.Label>
                    <Form.Control as="select" onChange={event => setData({...data, symbol: event.target.value})}
                                  type="text"
                                  defaultValue={data.name}>
                        <option className="d-none" value="">Select Symbol</option>
                        {symbols.map(({symbol, label}) => (<option value={symbol} key={symbol}>{label}</option>))}
                    </Form.Control>
                </Form.Group>

                <Form.Group className={`form-group ${style.formGroup}`}>
                    <Form.Label>interval</Form.Label>
                    <Form.Control as="select" onChange={event => setData({...data, interval: event.target.value})}
                                  type="select"
                                  defaultValue={data.name}>
                        <option value="">Select interval</option>
                        {timeFrame.map(time => (<option value={time.value} key={time.value}>{time.label}</option>))}
                    </Form.Control>
                </Form.Group>
                <Form.Group className={`form-group ${style.formGroup}`}>
                    <Form.Label>API Key</Form.Label>
                    <Form.Control as="select" onChange={event => setData({...data, cryptoAPIKeys: +event.target.value})}
                                  type="number"
                                  defaultValue={data.name} placeholder="Enter name Keys">
                        <option value="">Select Keys</option>
                        {listAPIKeys.map(api_key => (<option value={api_key.id} key={api_key.id}>{api_key.name}</option>))}
                    </Form.Control>
                </Form.Group>

                <Button className={style.btnGoToWork} onClick={event => addBot()}>Go To Work</Button>
            </Form>
        </div>
    )
}