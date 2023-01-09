import {useState} from "react";
import axios from "axios";
import {Button, Form} from "react-bootstrap";

export const UserRegister = () => {
    const [user, setUser] = useState({
        password: null,
        email: null,
        first_name: null,
        last_name: null
    })


    const redirect = () => {
        console.log('register');
    };

    const register = () => {
        axios.post('http://localhost:8000/user/register', user)
            .then(response => redirect());
    };

    return (
        <Form className="card-form">

            <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control required onChange={event => setUser({...user, first_name: event.target.value})} type="text" placeholder="Enter First name"/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control required onChange={event => setUser({...user, last_name: event.target.value})} type="text"
                              placeholder="Enter Last name"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required onChange={event => setUser({...user, email: event.target.value})} type="email" placeholder="Enter email"/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required onChange={event => setUser({...user, password: event.target.value})} type="password"
                              placeholder="Password"/>
            </Form.Group>

            <Button onClick={register} variant="primary" type="submit">
                Register
            </Button>

        </Form>
    );
}