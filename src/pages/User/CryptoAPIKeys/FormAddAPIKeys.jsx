import {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {cryptoAPIKeys} from "../../../services/userServices";
import style from "./cryptoAPI.module.css"

export const FormAddAPIKeys = ({pushAPIKeys}) => {
    const [data, setData] = useState(
        {
            name: '',
            cryptocurrency_exchange: '',
            api_key: '',
            secret_key: '',
            testnet: false,
            market: 'Spot'
        }
    )

    const add = () => {
        cryptoAPIKeys.addCryptoAPIKeys(data)
            .then(res => pushAPIKeys(res.data))
            .catch(error => error.response.status === 400 ? alert(`BAD Tokens. Try again`) : alert('BACKEND crying'))
    }

    return (
        <div className={style.formApiKeys}>
            <Form className={style.cardForm}>

                <Form.Group className={`mb-3 form-group ${style.formGroup}`}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={event => setData({...data, name: event.target.value})} type="text"
                                  defaultValue={data.name} placeholder="Enter name Keys"/>
                </Form.Group>

                <Form.Group className={`mb-3 form-group ${style.formGroup}`}>
                    <Form.Label>Cryptocurrency exchange</Form.Label>
                    <Form.Control onChange={event => setData({...data, cryptocurrency_exchange: event.target.value})}
                                  type="text"
                                  defaultValue={data.cryptocurrency_exchange}
                                  placeholder="Enter Cryptocurrency exchange name"/>
                </Form.Group>

                <Form.Group className={`mb-3 form-group ${style.formGroup}`} controlId="formBasicPassword">
                    <Form.Label>API Key</Form.Label>
                    <Form.Control onChange={event => setData({...data, api_key: event.target.value})} type="password"
                                  defaultValue={data.api_key} placeholder="API Key"/>
                </Form.Group>

                <Form.Group className={`mb-3 form-group ${style.formGroup}`} controlId="formBasicPassword">
                    <Form.Label>API Secret Key</Form.Label>
                    <Form.Control onChange={event => setData({...data, secret_key: event.target.value})} type="password"
                                  defaultValue={data.secret_key} placeholder="API Secret Key"/>
                </Form.Group>

                <Form.Group className={`mb-3 form-group ${style.formGroup}`}>
                    <Form.Label>Market</Form.Label>
                    <Form.Select
                        required
                        onChange={event => setData({...data, market: event.target.value})}>
                        <option value="Spot">Spot</option>
                        <option value="Futures">Futures</option>
                    </Form.Select>
                </Form.Group>

                <Form.Check
                    defaultChecked={false}
                    className={`check-box-testnet form-group ${style.formGroup}`}
                    type='switch'
                    label={`Testnet`}
                    onChange={event => setData({...data, testnet: !data.testnet})}
                />

                <div className={style.buttonAddApiKeys}>
                    <Button onClick={event => add()} type="submit">Add</Button>
                </div>

            </Form>

        </div>
    )
}