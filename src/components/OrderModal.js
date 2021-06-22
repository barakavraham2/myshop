import { useState, useEffect } from "react"
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { getProductsFromCategory } from "../services/storeData"
import { cartActions } from "../store/reducer/cart"
import MainPageLayOut from "./MainPageLayOut"
import ProductV2 from './ProductV2'

function OrderModal(showModal, setShowModal, cartId) {
    const dispatch = useDispatch()

    function updateCart() {
        dispatch(cartActions.getNewCartAfterCheckOut({
            totalQuantity: 0,
            totalAmount: 0,
            cartId: showModal.cartId,
            items: []
        }))
    }
    const history = useHistory()
    const state = useSelector(state => state)

    function hideModal() {
        showModal.setShowModal(false)
        updateCart()
        history.push('/home')
    }
    return (

        <Modal show={showModal.show} onHide={() => hideModal()} className="OrderModal">
            <div className="OrderModal">
                <Modal.Header>
                    <div className="px-4 py-5">
                        <h5 className="text-uppercase">{state.auth.currentUser.name}</h5>
                        <h4 className="mt-5 theme-color mb-5">Thanks for your order</h4> <span className="theme-color">Payment Summary</span>
                        <div className="mb-3"></div>
                    </div>
                </Modal.Header>
                <Modal.Body >
                    {
                        state.cart.items.map(item => {
                            return <div className="d-flex justify-content-between"> <span className="font-weight-bold">{item.name}(qty:{item.quantity})</span> <span className="text-muted">{item.quantity * item.price}₪ </span> </div>
                        })
                    }
                    <div className="d-flex justify-content-between"> <small>Tax</small> <small>{state.cart.totalAmount * 0.05}₪ </small> </div>
                    <div className="d-flex justify-content-between mt-3"> <span className="font-weight-bold">Total</span> <span className="font-weight-bold theme-color">{state.cart.totalAmount * 0.05 + state.cart.totalAmount}₪ </span> </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => { showModal.setShowModal(false); updateCart(); history.push('/profile') }}>check your profile</Button>
                </Modal.Footer>
            </div>
        </Modal >


    )
}

export default OrderModal



