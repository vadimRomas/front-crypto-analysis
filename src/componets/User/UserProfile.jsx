import {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import type {User} from '../../interface/UserInterface';
import {UserServices} from "../../services/userServices";

export const UserProfile = () => {
    const [user: User, setUser] = useState({
        id: '',
        first_name: '',
        last_name: '',
        email: '',
    });
    const userServices = new UserServices()

    useEffect((): void => {
        userServices.get_user().then(response => {
            setUser(response.data);
        });
    }, []);

    const deleteUser = (): void => {
        userServices.delete()
            .then(() => alert("DELETED!"))
            .catch(error => alert(error));
    };

    const save = (): void => {
        userServices.put(user)
            .then(() => alert('Saved!'))
            .catch(error => alert(error));
    };

    return (
        <Form className="card-form">

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First name</Form.Label>
                <Form.Control onChange={event => setUser({...user, firstName: event.target.value})} type="text"
                              defaultValue={user.first_name} placeholder="Enter First name"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last name</Form.Label>
                <Form.Control onChange={event => setUser({...user, lastName: event.target.value})} type="text"
                              defaultValue={user.last_name} placeholder="Enter Last name"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={event => setUser({...user, email: event.target.value})} type="email"
                              defaultValue={user.email} placeholder="Enter email"/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Button style={{margin: '10px'}} onClick={save} variant="primary" type="submit">Save changes</Button>
            <Button onClick={deleteUser}>Delete account</Button>

        </Form>
    );
}
