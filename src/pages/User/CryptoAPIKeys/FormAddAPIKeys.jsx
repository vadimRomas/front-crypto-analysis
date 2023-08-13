import {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {UserServices} from "../../../services/userServices";

export const FormAddAPIKeys = () => {
    const [data, setData] = useState(
        {
            name: '',
            cryptocurrency_exchange: '',
            api_key: '',
            secret_key: '',
        }
    )

    const add = () => {
        const userService = new UserServices()
        userService.addCryptoAPIKeys(data)
            .then()
            .catch()
        console.log("added");
    }

    return(
        <div className={"form-api-keys"}>
            <Form className="card-form">

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="white">Name</Form.Label>
                        <Form.Control onChange={event => setData({...data, name: event.target.value})} type="text"
                                      defaultValue={data.name} placeholder="Enter name Keys"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="white">Cryptocurrency exchange</Form.Label>
                        <Form.Control onChange={event => setData({...data, cryptocurrency_exchange: event.target.value})} type="text"
                                      defaultValue={data.cryptocurrency_exchange} placeholder="Enter Cryptocurrency exchange name"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="white">API Key</Form.Label>
                        <Form.Control onChange={event => setData({...data, api_key: event.target.value})} type="password"
                                      defaultValue={data.api_key} placeholder="API Key"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="white">API Secret Key</Form.Label>
                        <Form.Control onChange={event => setData({...data, secret_key: event.target.value})} type="password"
                                      defaultValue={data.secret_key} placeholder="API Secret Key"/>
                    </Form.Group>

                    {/*<Button style={{margin: '5px'}} onClick={save} variant="primary" type="submit">Save changes</Button>*/}
                    {/*<Button onClick={deleteUser}>Delete account</Button>*/}
                    {/*<Button style={{margin: '5px'}} onClick={logout}>logout</Button>*/}

                </Form>
            <div className="button-close-form">
                <Button onClick={event => add()} type="submit">Add</Button>
            </div>
        </div>
    )
}