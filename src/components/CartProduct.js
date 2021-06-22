import React from 'react'
import { } from 'mdbreact'
import { Link } from 'react-router-dom'
import '../Cart.scss'
import { useSelector } from 'react-redux'
function CartProduct({ props, index, remove }) {
    const indexProp = index % 2 === 0 ? 'items even' : 'items odd'
    const cartId = useSelector(state => state.cart.cartId)
    return (

        < li className={indexProp} >
            <div className="infoWrap">
                <div className="cartSection">
                    <img src={props.img} alt="" className="itemImg" />
                    <p className="itemNumber">#item Number {props.itemId}</p>
                    <h3>{props.name}</h3>
                    <p> <input type="text" className="qty" placeholder={props.quantity} /> x {props.price}</p>
                    <p className="stockStatus"> In Stock</p>
                </div>
                <div className="prodTotal cartSection">
                    <p>{props.totalPrice}₪ </p>
                </div>
                <div className="cartSection removeWrap">
                    <Link to="#" className="remove" onClick={() => remove(props, cartId)}>x</Link>
                </div>
            </div>
        </ li >


    )
}

export default CartProduct
