import {Button, Form} from "react-bootstrap";
import $api from "../../services/intercaptor";
import {useState} from "react";

export const AddUserAWS = () => {
    const [data, setData] = useState({url: '', bucket: ''})

    const add = () => {
      $api.post('', data).then(() => alert('Added!')).catch(error => alert(error))
    }

    return (
        <div>
            <p>First you will need add our AWS user to your permission in bucket.</p>
            <Form className="card-form">

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>url</Form.Label>
                    <Form.Control onChange={event => setData(event.target.value)} type="text"
                                  placeholder="url"/>
                    <Form.Text className="text-muted">
                        pryklad
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Bucket</Form.Label>
                    <Form.Control onChange={event => setData(event.target.value)} type="text"
                                  placeholder="Bucket"/>
                </Form.Group>

                <Button onClick={add} variant="primary" type="submit">Add</Button>

            </Form>
        </div>
    )
}