import {useEffect, useState} from "react";
import {cryptoServices} from "../../services/CryptoServices";
import {Button} from "react-bootstrap";
import style from "./trading-bot.module.css"
import {FormUserAddBot} from "./FormUserAddBot";

export const TradingBot = () => {
    const [bots, setBots] = useState([]);
    const [isShowForm, setIsShowForm] = useState(false)
    const [chosenBot, setChosenBot] = useState(null)

    const fetchGetBots = () => {
        cryptoServices.get_bot()
            .then(({data}) => setBots(data))
    }

    useEffect(() => {
        fetchGetBots()
    }, []);

    const openForm = (id) => {
        setIsShowForm(true)
        setChosenBot(id)
    }

    return (
        <div>
            {bots.length && bots.map(({name, picture, description, id}) => <div className={style.bot} key={id}>
                <img className={style.botImg} src={picture} alt=""/>
                <div className={style.botBody}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    {/* TODO <Button>details</Button> create new page with chart, description  ...*/}
                    {isShowForm && chosenBot === id ? <FormUserAddBot botId={id} setIsShowForm={setIsShowForm}/> :
                        <Button className={style.btnShowForm} onClick={event => openForm(id)}>add</Button>}
                </div>
            </div>)}
        </div>
    )
}
