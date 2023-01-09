import {Button} from "react-bootstrap";
import $api from "../../services/intercaptor";
import {useEffect, useState} from "react";

export const SaveGraph = () => {
    const [data, setDate] = useState({symbol: {}, time: {}})

    useEffect(() => {
        const currentTimeFrame =  JSON.parse(localStorage.getItem("timeFrame"))
        const currentSymbol =  JSON.parse(localStorage.getItem("symbol"))
        setDate(
            {
                symbol: currentSymbol,
                time: currentTimeFrame
            }
        )
    }, [])

    const save = () =>  {
        $api.get(`crypto/save/img/s3?symbol=${data.symbol.value}&time=${data.time.value}`)
            .then(() => alert('SAVED!'))
            .catch(error => alert(error))
    }
    console.log(data);
    return (
        <div>
            <Button onClick={save}>Save {data.symbol.value} {data.time.value}</Button>
        </div>
    )
}