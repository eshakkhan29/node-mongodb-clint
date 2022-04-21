import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import useUsers from '../../Hook/useUsers/useUsers';

const AddUser = () => {
    const [users,setUsers]= useUsers();
    const handelUserAdd = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const mobile = event.target.mobile.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const city = event.target.city.value;
        const zip = event.target.zip.value;

        const user = { name, mobile, email, address, city, zip };
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                const newUser = [...users, data];
                setUsers(newUser);
            })
    }
    return (
        <div className='mt-5 w-50 m-auto'>
            <Form onSubmit={handelUserAdd}>
                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control name='mobile' placeholder="Mobile number" />
                    </Form.Group>
                </Row>
                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control name='address' placeholder="1234 Main St" />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control name='city' placeholder='City' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control name='zip' placeholder='zip code' />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddUser;