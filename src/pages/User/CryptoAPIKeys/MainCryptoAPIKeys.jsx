import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";

import {FormAddAPIKeys} from "./FormAddAPIKeys";
import {cryptoAPIKeys} from "../../../services/userServices";
import binance_picture from '../../../state/img/binance_api.png';
import style from './cryptoAPI.module.css'
import Card from "react-bootstrap/Card";
import {CloseButton} from "react-bootstrap";

export const MainCryptoAPIKeys = () => {
    const [showForm, setShowForm] = useState(false)
    const [listApiKeys, setListAPIKeys] = useState([])

    useEffect(() => {
        cryptoAPIKeys.getCryptoAPIKeys('all')
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
        <div className={style.mainCryptoApiKeys}>
            {listApiKeys.length
                ? <div className={style.cardsUserCryptoKeys}>
                    {listApiKeys.map(value => {
                        return (
                            <Card className={`${style.cardUserCryptoKeys} text-center`}>
                                <Card.Img variant="top" src={binance_picture}/>
                                <Card.Body className={style.cardBody}>
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
                    {showForm ? <div className={style.openFormApiKeys}>
                            <div className={style.buttonCloseForm}>
                                <CloseButton onClick={event => setShowForm(!showForm)}/>
                            </div>
                            <FormAddAPIKeys pushAPIKeys={pushAPIKeys}/>
                        </div>
                        : <div className={style.buttonOpenForm}>
                            <Button
                                variant="primary"
                                onClick={e => setShowForm(!showForm)}
                            >
                                Add API Keys
                            </Button>
                        </div>}
                </div>
                :
                <div className={style.userHaventKeys}>
                    {!showForm ? <div>
                            <p>You haven`t any API keys yet.</p>
                            <Button className={style.buttonOpenForm} variant="primary"
                                    onClick={e => setShowForm(!showForm)}>
                                {showForm ? 'Close from' : 'Add API Keys'}
                            </Button>
                        </div>
                        : <div className={style.openFormApiKeys}>
                            <div className={style.buttonCloseForm}>
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