import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";

import {FormAddAPIKeys} from "./FormAddAPIKeys";
import {userServices, cryptoAPIKeys} from "../../../services/userServices";
import binance_picture from '../../../state/img/binance_api.png';
import './cryptoAPI.css'
import Card from "react-bootstrap/Card";
import * as Icon from "react-bootstrap-icons";
import {CloseButton} from "react-bootstrap";

export const MainCryptoAPIKeys = () => {
    const [showForm, setShowForm] = useState(false)
    const [listApiKeys, setListAPIKeys] = useState([])

    useEffect(() => {
        userServices.getCryptoAPIKeys()
            .then(res => setListAPIKeys(res.data))
            .catch(error => console.log(error))

    }, [])

    const pushAPIKeys = (APIKeys) => {
        setShowForm(false)
        setListAPIKeys([...listApiKeys, APIKeys])
    }

    const deleteKeys = (keysId) => {
        cryptoAPIKeys.deleteCryptoAPIKeys(keysId)
            .then(res => {
                setListAPIKeys(listApiKeys.filter(value => value.id !== keysId))
            })
            .catch(error => alert(error))

    }

    return (
        <div className="main-crypto-api-keys">
            {listApiKeys.length
                ? <div className='cards-user-crypto-keys'>
                    {listApiKeys.map(value => {
                        return (
                            <Card className='card-user-crypto-keys text-center'>
                                <Card.Img variant="top" src={binance_picture}/>
                                <Card.Body className='card-body'>
                                    <Card.Title>{value.name}</Card.Title>
                                    <Card.Text>
                                        API Key: {value.api_key.slice(0, 12)}*** <br/>
                                        This API Keys have a crypto exchange is {value.cryptocurrency_exchange}, market
                                        is {value.market}, testnet is {value.testnet.toString()}
                                    </Card.Text>
                                    <Button variant="primary" onClick={event => deleteKeys(value.id)}>Delete</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                    {showForm ? <div className="open-form-api-keys">
                            <div className='button-close-form'>
                                <CloseButton onClick={event => setShowForm(!showForm)}/>
                            </div>
                            <FormAddAPIKeys pushAPIKeys={pushAPIKeys}/>
                        </div>
                        : <div className='button-open-form'>
                            <Button variant="primary"
                                    onClick={e => setShowForm(!showForm)}>
                                Add API Keys
                            </Button>
                        </div>}
                </div>
                :
                <div className={'user-havent-keys'}>
                    {!showForm ? <div>
                            <p>You haven`t any API keys yet.</p>
                            <Button className="button-open-form" variant="primary"
                                    onClick={e => setShowForm(!showForm)}>
                                {showForm ? 'Close from' : 'Add API Keys'}
                            </Button>
                        </div>
                        : <div className="open-form-api-keys">
                            <div className='button-close-form'>
                                <CloseButton onClick={event => setShowForm(!showForm)}/>
                            </div>
                            <FormAddAPIKeys pushAPIKeys={pushAPIKeys}/>
                        </div>
                    }
                </div>
            }
        </div>
    )
}