
import { fetch_Products } from '../actions/productActions'
const initState = { items: [] }

export default function productsReducer(state = initState, action) {
    switch (action.type) {
        case fetch_Products.type:
            return { ...initState, items: action.payload }

        default:
            return state
    }


}



