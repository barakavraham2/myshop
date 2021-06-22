import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MainPageLayOut from '../components/MainPageLayOut'
import { Accordion, Button, Card, Table } from 'react-bootstrap'
export const Profile = () => {
    const userId = useSelector(state => state.auth.currentUser.id)

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: ''
    })
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get(`https://thawing-reef-89327.herokuapp.com/api/users/finduser/${userId}`)
            .then(
                res => {
                    setUser(res.data[0])
                }
            )
            .catch(
                err => {
                }
            )
    }, [])
    useEffect(() => {
        axios.get(`https://thawing-reef-89327.herokuapp.com/api/orders/myorders`, {
            headers: {
                'x-auth-token': localStorage.getItem('user')
            }
        })
            .then(
                res => {
                    setOrders(res.data)
                }
            )
            .catch(
                err => {
                }
            )
    }, [])


    return (
        <MainPageLayOut >
            <div className="container">
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"></img>
                                        <div className="mt-3">
                                            <h4>{user.firstName} {user.lastName}</h4>
                                            <p className="text-muted font-size-sm">{user.street}, {user.city}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {user.firstName} {user.lastName}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {user.email}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {user.street},{user.city}
                                        </div>
                                    </div>
                                    <div className="row">
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-12" style={{ width: '' }}>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h1 className="projTitle">Order History</h1>
                                        <Accordion>
                                            {
                                                orders.map(order => {
                                                    return <Card key={order.id}>
                                                        <Card.Header>
                                                            <Accordion.Toggle as={Button} variant="link" eventKey={order.id} id={order.id}>
                                                                order Number #{order.id}
                                                            </Accordion.Toggle>
                                                        </Card.Header>
                                                        <Accordion.Collapse key={order.id} eventKey={order.id}>
                                                            <Card.Body>
                                                                <Table striped bordered hover>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>id</th>
                                                                            <th>quantity</th>
                                                                            <th>total price</th>
                                                                            <th>country</th>
                                                                            <th>city</th>
                                                                            <th>street</th>
                                                                            <th>house number</th>
                                                                            <th>created at</th>
                                                                            <th>delivey at</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>{order.id}</td>
                                                                            <th>{order.quantity}</th>
                                                                            <th>{order.TotalPrice}₪ </th>
                                                                            <th>{order.country}</th>
                                                                            <th>{order.city}</th>
                                                                            <th>{order.street}</th>
                                                                            <th>{order.houseNumber}</th>
                                                                            <th>{order.CreatedAt}</th>
                                                                            <th>{order.DeliveryDate}</th>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </Card.Body>
                                                        </Accordion.Collapse>
                                                    </Card>
                                                })
                                            }
                                        </Accordion>

                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </MainPageLayOut>
    )
}

export default Profile