import {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {userServices} from "../../../services/userServices";

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
        userServices.addCryptoAPIKeys(data)
            .then(res => pushAPIKeys(res.data))
            .catch(error => error.response.status === 400 ? alert(`BAD Tokens. Try again`) : alert('BACKEND crying'))
    }

    return (
        <div className={"form-api-keys"}>
            <Form className="card-form">

                <Form.Group className="mb-3 form-group">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={event => setData({...data, name: event.target.value})} type="text"
                                  defaultValue={data.name} placeholder="Enter name Keys"/>
                </Form.Group>

                <Form.Group className="mb-3 form-group">
                    <Form.Label>Cryptocurrency exchange</Form.Label>
                    <Form.Control onChange={event => setData({...data, cryptocurrency_exchange: event.target.value})}
                                  type="text"
                                  defaultValue={data.cryptocurrency_exchange}
                                  placeholder="Enter Cryptocurrency exchange name"/>
                </Form.Group>

                <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
                    <Form.Label>API Key</Form.Label>
                    <Form.Control onChange={event => setData({...data, api_key: event.target.value})} type="password"
                                  defaultValue={data.api_key} placeholder="API Key"/>
                </Form.Group>

                <Form.Group className="mb-3  form-group" controlId="formBasicPassword">
                    <Form.Label>API Secret Key</Form.Label>
                    <Form.Control onChange={event => setData({...data, secret_key: event.target.value})} type="password"
                                  defaultValue={data.secret_key} placeholder="API Secret Key"/>
                </Form.Group>

                <Form.Group className="mb-3 form-group">
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
                    className='form-group check-box-testnet'
                    type='switch'
                    label={`Testnet`}
                    onChange={event => setData({...data, testnet: !data.testnet})}
                />

                <div className="button-add-api-keys">
                    <Button onClick={event => add()} type="submit">Add</Button>
                </div>

            </Form>

        </div>
    )
}