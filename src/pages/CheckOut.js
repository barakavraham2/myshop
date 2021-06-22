import React, { useState } from 'react'
import MainPageLayOut from '../components/MainPageLayOut'
import { Form, Button, Col, Alert } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import Cart from './Cart'
import PureCart from './PureCart'
import { useDispatch, useSelector } from 'react-redux'
import { closecart, sendOrder } from '../services/cartService'
import OrderModal from '../components/OrderModal'
import { cartActions } from '../store/reducer/cart'
import { fetchCartFromDb } from '../store/actions/cartActions'

function CheckOut() {
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const [errorMassege, setErrorMassege] = useState('')
    const [orderDetails, setOrderDetails] = useState({
        firstName: '',
        lastName: '',
        country: '',
        city: '',
        street: '',
        houseNumber: '',
        fourDigits: ''
    })
    const [showModal, setShowModal] = useState(false)
    const [newCartId, setNewCartId] = useState()

    async function handleSubmitOrder() {
        const today = new Date();
        const nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
        const orderForm = {
            userId: state.auth.currentUser.id,
            cartId: state.cart.cartId,
            quantity: state.cart.totalQuantity,
            TotalPrice: state.cart.totalAmount,
            firstName: orderDetails.firstName,
            lastName: orderDetails.lastName,
            country: orderDetails.country,
            city: orderDetails.city,
            street: orderDetails.street,
            houseNumber: Number(orderDetails.houseNumber),
            CreatedAt: today,
            DeliveryDate: nextweek,
            Payment: Number(orderDetails.fourDigits)
        }
        await sendOrder(orderForm)
            .then(res => {
                closecart().then(res => {
                    localStorage.setItem('cartId', res.data.id)
                    dispatch(cartActions.setCartId(res.data.id))
                    setNewCartId(res.data.id)
                })

                setShowModal(true)
            })
            .catch(error => {
                if (error.response) {
                    setErrorMassege(error.response.data)
                }
            })

    }
    return (
        <MainPageLayOut>
            <div className="contianerCheckOut">
                <div className="d-flex bd-highlight example-parent ">
                    <div className="p-2 w-100 bd-highlight col-example">
                        <div className="wrap cf">
                            <h1 className="projTitle">Check<br></br> Out</h1>
                        </div>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>first name</Form.Label>
                                    <Form.Control type="text" placeholder="first name" onChange={(e) => { setOrderDetails({ ...orderDetails, firstName: e.target.value }) }} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>last name</Form.Label>
                                    <Form.Control type="text" placeholder="last name" onChange={(e) => { setOrderDetails({ ...orderDetails, lastName: e.target.value }) }} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>country</Form.Label>
                                    <Form.Control type="text" placeholder="country" onChange={(e) => { setOrderDetails({ ...orderDetails, country: e.target.value }) }} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>street</Form.Label>
                                    <Form.Control type="text" placeholder="country" onChange={(e) => { setOrderDetails({ ...orderDetails, street: e.target.value }) }} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>city</Form.Label>
                                    <Form.Control type="text" placeholder="city" onChange={(e) => { setOrderDetails({ ...orderDetails, city: e.target.value }) }}>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>house number</Form.Label>
                                    <Form.Control type="number" placeholder="house number" onChange={(e) => { setOrderDetails({ ...orderDetails, houseNumber: e.target.value }) }} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>4 last digit of cradit card</Form.Label>
                                    <Form.Control type="number" placeholder="4 digits" onChange={(e) => { setOrderDetails({ ...orderDetails, fourDigits: e.target.value }) }} />
                                </Form.Group>
                            </Form.Row>

                            {errorMassege && <Alert variant='danger' className="alertRegistern">
                                {errorMassege}
                            </Alert>}
                            <Button variant="primary" type="button" onClick={() => handleSubmitOrder()}>
                                Submit
                            </Button>
                        </Form>
                    </div>

                    <div className="p-2 flex-shrink-1 bd-highlight col-example">
                        <PureCart />
                    </div>
                </div>
            </div>
            <OrderModal show={showModal} setShowModal={setShowModal} cartId={newCartId} />
        </MainPageLayOut >
    )
}

export default CheckOut
