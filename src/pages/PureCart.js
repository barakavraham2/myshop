import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct'
import MainPageLayOut from '../components/MainPageLayOut'
import '../Cart.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/reducer/cart'
import { removeItemFromCart } from '../store/actions/cartActions'
const PureCart = () => {
    const products = useSelector(state => state.cart.items)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    function handleDelete(product, cartId) {
        dispatch(removeItemFromCart({
            product,
            cartId
        }))
    }
    return (
        <>
            <div className="cart-container">
                <div className="wrap cf">
                    <h1 className="projTitle">Shopping Cart</h1>
                </div>
                <div className="cart">
                    <ul className="cartWrap">
                        {
                            products.map((item, index) => {

                                return <CartProduct key={item.itemId} props={item} index={index} remove={handleDelete} />
                            })
                        }
                    </ul>
                </div>

                <div className="subtotal cf">
                    <ul>
                        <li className="totalRow"><span className="label">Subtotal</span><span className="value">{cart.totalAmount}₪</span></li>
                        <li className="totalRow"><span className="label">Tax</span><span className="value">{cart.totalAmount * 0.05}₪</span></li>
                        <li className="totalRow final"><span className="label">Total</span><span className="value">{cart.totalAmount * 1.05}₪</span></li>
                    </ul>
                </div>
            </div>



        </ >
    )
}

export default PureCart
