import {useState} from "react";
import {Button, Form} from "react-bootstrap";
import axios from "axios";

export const UserLogin = () => {
    const [email: string, setEmail] = useState('')
    const [password: string, setPassword] = useState('')

    const login = (): void => {

        axios.post('http://localhost:8000/user/login', {"email": email, "password": password})
            .then(res => {
                localStorage.setItem('refresh', res.data.refresh)
                localStorage.setItem('access', res.data.access)
            })
        // ).then((response) => response.json())
        //     .then((data) => {
        //         console.log('Success:', data);
        //     })
            .catch((error) => {
                alert(error);
            });

    }
    return (
        <Form className="card-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={event => setEmail(event.target.value)} type="email" placeholder="Enter email"/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={event => setPassword(event.target.value)} type="password"
                              placeholder="Password"/>
            </Form.Group>
            <Button onClick={login} variant="primary">
                Login
            </Button>
        </Form>
    )
}
