import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const [user, setUser] = useState({});

    const { id } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    // update user

    const handelUserUpdate = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const mobile = event.target.mobile.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const city = event.target.city.value;
        const zip = event.target.zip.value;

        const user = { name, mobile, email, address, city, zip };

        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
            })
    };

    return (
        <div>
            <h3>{user._id}</h3>
            <h4>{user.name}</h4>
            <h1>update users</h1>
            <div>
                <Form onSubmit={handelUserUpdate}>
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
                        Update
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default UpdateUser;