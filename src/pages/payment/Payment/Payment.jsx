import {Card} from "react-bootstrap";

export const Payment = () => {
    // function pay() {
    //     console.log('op')
    // }

    return (
        <div style={{display: "inline-flex"}}>
            <Card
                bg=''
                key=''
                text='dark'
                style={{width: '18rem'}}
                className="mb-2"
            >
                <Card.Header>200 usd</Card.Header>
                <Card.Body>
                    <Card.Title>crypto analysis</Card.Title>
                    <Card.Text>
                        pay this option and you open our crypto analysis to anyone coin
                    </Card.Text>
                    {/*<Button onClick={pay} variant="primary">Pay</Button>*/}
                    <a href='http://127.0.0.1:8000/my_payments/checkout' target="_blank">Pay now</a>
                </Card.Body>
            </Card>

            <Card
                bg=''
                key=''
                text='dark'
                style={{width: '18rem'}}
                className="mb-2"
            >
                <Card.Header>250 usd</Card.Header>
                <Card.Body>
                    <Card.Title>crypto analysis and answer for your questions</Card.Title>
                    <Card.Text>
                        pay this option and you open our crypto analysis to anyone coin
                    </Card.Text>
                    {/*<Button onClick={pay} variant="primary">Pay</Button>*/}
                    <a href='http://127.0.0.1:8000/my_payments/checkout' target="_blank">Pay now</a>
                </Card.Body>
            </Card>

            <Card
                bg=''
                key=''
                text='dark'
                style={{width: '18rem'}}
                className="mb-2"
            >
                <Card.Header>400 usd</Card.Header>
                <Card.Body>
                    <Card.Title>full crypto analysis</Card.Title>
                    <Card.Text>
                        pay this option and you open our full crypto analysis to anyone coin
                    </Card.Text>
                    {/*<Button onClick={pay} variant="primary">Pay</Button>*/}
                    <a href='http://127.0.0.1:8000/my_payments/checkout' target="_blank">Pay now</a>
                </Card.Body>
            </Card>
        </div>
    );
}