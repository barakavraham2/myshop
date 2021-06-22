
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../store/actions/cartActions";
import { cartActions } from '../store/reducer/cart'

function Products(props) {
    const dispatch = useDispatch()
    const cartId = useSelector(state => state.cart.cartId)

    function handleAddToCart() {
        dispatch(addItemToCart(props.product, cartId))
    }
    return (
        <div className="bestselling-furniture-card">
            <img src={props.product.img} alt={props.product.name} className="bestselling-furniture-img" ></img>
            <h2 className="bestselling-furniture-heading">{props.product.name}</h2>
            <p className="bestselling-furniture-paragraph">price: {props.product.price}</p>
            <button className="bestselling-furniture-btn" onClick={() => handleAddToCart()}>Buy Now</button>
        </div>

    )
}

export default Products;