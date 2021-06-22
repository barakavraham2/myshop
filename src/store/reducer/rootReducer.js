import { combineReducers } from 'redux'
import authSlice from './auth'
import cartSlice from './cart'
import productsReducer from './productsReducer'
import seacrhSlice from './search'
// action creator
export default combineReducers({
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    search: seacrhSlice.reducer
})