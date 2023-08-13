import {Button, Form} from "react-bootstrap";
import "./user.css"
import {UserServices} from "../../services/userServices";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const UserUpdate = () => {
    const [user, setUser] = useState({
        id: '',
        first_name: '',
        last_name: '',
        email: '',
    });
    const userServices = new UserServices()
    const navigate = useNavigate()

    useEffect(() => {
        userServices.get_user()
            .then(response => setUser(response.data))
            .catch(error => {
                if (error.response.status === 401) {
                    localStorage.removeItem('access');
                    localStorage.removeItem('refresh');
                    navigate('/user/login', {replace: true});
                }
            })
    }, []);

    const save = () => {
        userServices.put(user)
            .then(() => alert('Saved!'))
            .catch(error => alert(error));
    };
    return (
        <div className={'user-form'}>
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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>API Key</Form.Label>
                    <Form.Control type="password"
                                  placeholder="API Key"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>API Secret Key</Form.Label>
                    <Form.Control type="password"
                                  placeholder="API Secret Key"/>
                </Form.Group>

                <Button style={{margin: '5px'}} onClick={event => save()} variant="primary" type="submit">Save
                    changes</Button>
                {/*<Button onClick={deleteUser}>Delete account</Button>*/}
                {/*<Button style={{margin: '5px'}} onClick={logout}>logout</Button>*/}

            </Form>
        </div>
    )
}