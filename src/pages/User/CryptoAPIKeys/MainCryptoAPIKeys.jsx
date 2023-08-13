import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";

import {FormAddAPIKeys} from "./FormAddAPIKeys";
import {UserServices, CryptoAPIKeys} from "../../../services/userServices";
import binance_picture from '../../../state/img/binance_api.png';
import './cryptoAPI.css'
import Card from "react-bootstrap/Card";
import * as Icon from "react-bootstrap-icons";
import {CloseButton} from "react-bootstrap";

export const MainCryptoAPIKeys = () => {
    const [showForm, setShowForm] = useState(false)
    const [listApiKeys, setListAPIKeys] = useState([{}])
    const userService = new UserServices()

    useEffect(() => {
        userService.getCryptoAPIKeys()
            .then(res => setListAPIKeys(res.data))
            .catch(error => console.log(error))

    }, [])

    const deleteKeys = (keysId) => {
        const cryptoAPIKeys = new CryptoAPIKeys()
        cryptoAPIKeys.deleteCryptoAPIKeys(keysId)
            .then(res => {
                console.log('deleted')
            })
            .catch(error => alert(error))

    }


    return (
        <div className="main-crypto-api-keys">
            {listApiKeys.length
                ? <div className='cards-user-crypto-keys'>
                    {listApiKeys.map(value => {
                        return (
                            <Card className='card-user-crypto-keys' style={{width: '18rem'}}>
                                <Card.Img variant="top" src={binance_picture}/>
                                <Card.Body>
                                    <Card.Title>{value.name}</Card.Title>
                                    {/*<Card.Text>*/}
                                    {/*    Some quick example text to build on the card title and make up the*/}
                                    {/*    bulk of the card's content.*/}
                                    {/*</Card.Text>*/}
                                    <Button variant="primary" onClick={event => deleteKeys(value.id)}>Delete</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
                : <div className={'user-havent-keys'}>
                    {showForm
                        ? <div className="open-form-api-keys">
                            <div className='button-close-form'>
                                <CloseButton onClick={event => setShowForm(!showForm)} variant="white"/>
                            </div>
                            <FormAddAPIKeys/>
                        </div>
                        : <div>
                            <p>You haven`t any API keys yet. Please will add API keys.</p>
                            <Button className="button-add-api-keys" variant="primary"
                                    onClick={e => setShowForm(!showForm)}>
                                {showForm ? 'Close from' : 'Add API Keys'}
                            </Button>
                        </div>
                    }
                </div>
            }
        </div>
    )
}