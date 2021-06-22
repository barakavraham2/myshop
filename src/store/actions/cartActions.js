import axios from "axios"
import { useSelector } from "react-redux"
import { cartActions } from "../reducer/cart"

export const addItemToCart = (item, cartId) => {
    return async (dispatch) => {
        const AddItem = async () => {
            await axios.post(`https://thawing-reef-89327.herokuapp.com/api/cart/additem`, {
                productId: item.id,
                quantity: 1,
                productPrice: item.price,
                cartId
            }, {
                headers: {
                    'x-auth-token': localStorage.getItem('user')
                }
            })
        }
        try {
            await AddItem()
            dispatch(cartActions.addItemToCart({
                id: item.id,
                name: item.name,
                price: item.price,
                img: item.img
            }))
        }
        catch {

        }

    }
}
export const removeItemFromCart = (item, cartId) => {
    return async (dispatch) => {
        const RemoveItem = async () => {
            console.log(item)
            console.log(item.cartId)
            await axios.post(`https://thawing-reef-89327.herokuapp.com/api/cart/removeitem`, {
                productId: item.product.itemId,
                productPrice: item.product.price,
                cartId: item.cartId
            }
            )
        }
        try {
            await RemoveItem()
            dispatch(cartActions.removeItemFromCart({
                id: item.product.itemId,
                name: item.product.name,
                price: item.product.price,
                img: item.product.img
            }))
        }
        catch (error) {
            console.log(error)
        }

    }
}
export const fetchCartFromDb = cartId => {
    return async (dispatch) => {
        const fetchCart = async () => {
            const res = await axios.get(`https://thawing-reef-89327.herokuapp.com/api/cart/getcart/${cartId}`)
            const arr = res.data;
            arr.forEach(element => {
                dispatch(cartActions.addItemToCart({
                    id: element.productId,
                    name: element.name,
                    price: element.price,
                    img: element.img,
                    quantity: element.quantity,
                    totalPrice: element.TotalPrice

                }))
            });

        }
        fetchCart()

    }
}