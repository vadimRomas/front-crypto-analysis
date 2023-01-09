import {useEffect, useState} from "react";
import $api from "../../../services/intercaptor";
import {PaymentInterface} from "../../../interface/PaymentInterface";
import {Button, Card} from "react-bootstrap";

export const PaymentHistory = () => {
    const [listPayments: Array<PaymentInterface>, setListPayments] = useState([]);

    useEffect((): void => {
        $api.get(`my_payments`)
            .then(response => {
                const data = response.data.map(value => {
                    if (value.status === 'pay') value.variant = 'success'
                    if (value.status === 'not_pay') value.variant = 'warning'
                    if (value.status === 'returned') value.variant = 'info'
                    return value
                })

                setListPayments(data);
            })
            .catch(error => alert(error));

    }, []);

    const return_money = (event) => {
        // const payment = listPayments[event.target.value]
        const payId = event.target.value;

        $api.patch(`my_payments/return/${payId}`, {status: 'returned'}).then(res => res).catch(error => error);
    }

    function pay(event) {
        const payId = event.target.value;

        $api.patch(`my_payments/return/${payId}`, {status: 'pay'}).then(res => res).catch(error => error);
    }

    return (
        <div style={{display: "flex"}}>
            {listPayments.map((value) => (
                <Card
                    bg={value.variant.toLowerCase()}
                    key={value.variant}
                    text={value.variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{width: '18rem', margin: '10px'}}
                    className="mb-2"
                >
                    {/*<Card.Header>Header</Card.Header>*/}
                    <Card.Body>
                        <Card.Title>{value.status}</Card.Title>
                        <Card.Text>
                            {value.amount} {value.currency}
                        </Card.Text>
                        {value.status === 'pay'? <Button onClick={return_money} value={value.id} variant="primary">Return</Button>: ''}
                        {value.status === 'not_pay'? <Button onClick={pay} value={value.id} variant="primary">Pay</Button>: ''}
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}
