import React from 'react'
import { Button } from 'react-bootstrap'
import '../ProductV2.css'
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../store/actions/cartActions";
import EditProduct from './EditProduct';

function ProductV2(props) {
    const dispatch = useDispatch()
    const cartId = useSelector(state => state.cart.cartId)
    const userRole = useSelector(state => state.auth.currentUser.role)

    function handleAddToCart() {
        dispatch(addItemToCart(props.product, cartId))
    }


    return (
        <div>
            <div className="profile-card-2">
                {userRole === 2 ? <EditProduct product={props.product} /> : ''}
                <img src={props.product.img} className="img img-responsive" alt=""></img>
                <div className="profile-name">{props.product.name}</div>
                <div className="profile-position">{props.product.price}₪ </div>
                <div className="description">
                    <p>{props.product.description}
                    </p>
                    <Button className="product-button" onClick={() => handleAddToCart()}>add to cart</Button>

                </div>
            </div>
        </div>



    )
}

export default ProductV2
