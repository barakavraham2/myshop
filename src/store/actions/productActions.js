import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'
export const fetch_Products = createAction('FETCH_PRODUCTS')



export const fetchProducts = (id) => (dispatch) => {
    axios.get(`https://thawing-reef-89327.herokuapp.com/api/products/productsByCategory/${id}`).then(
        res => {
            dispatch({
                type: fetch_Products.type,
                payload: res.data
            }
            )
        }
    )

}