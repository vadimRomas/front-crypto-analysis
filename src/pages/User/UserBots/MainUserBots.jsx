import {useEffect, useState} from "react";
import {userBotsService} from "../../../services/userServices";
import style from "../CryptoAPIKeys/cryptoAPI.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const MainUserBots = () => {
    const [bots, setBots] = useState([])

    const fetchUserBots = () => {
        userBotsService.getBots().then(({data}) => setBots(data))
    }

    useEffect(() => {
        fetchUserBots()
    }, []);

    const changeIsActive = (id, isActive) => {
        userBotsService.changeIsActive(id, isActive).then() // todo notification

        const updateBots = bots.map(bot => bot.id === id ? {...bot, is_active: isActive} : bot)
        setBots(updateBots)

    }

    return (
        <div className='main-user-bots'>
            {bots.length && bots.map(bot => <Card className={`${style.cardUserCryptoKeys} text-center`} key={bot.id}>
                <Card.Img variant="top" src={bot.bot.picture}/>
                <Card.Body className={style.cardBody}>
                    <Card.Title>{bot.name}</Card.Title>
                    <Card.Text>
                        API Key: {bot.cryptoAPIKeys.name} <br/>
                        This Bot work with a crypto exchange is {bot.cryptoAPIKeys.cryptocurrency_exchange}, market
                        is {bot.cryptoAPIKeys.market}
                    </Card.Text>
                    <Button variant="primary"
                            onClick={event => changeIsActive(bot.id, !bot.is_active)}>{bot.is_active ? 'STOP' : 'START'}</Button>
                </Card.Body>
            </Card>)}
        </div>
    )
}