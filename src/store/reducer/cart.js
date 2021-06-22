import { createSlice } from '@reduxjs/toolkit'



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
        cartId: localStorage.getItem('cartId') ? Number(localStorage.getItem('cartId')) : ''
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.itemId === newItem.id)
            newItem.quantity ? state.totalQuantity = state.totalQuantity + newItem.quantity : state.totalQuantity++;
            newItem.totalPrice ? state.totalAmount = state.totalAmount + newItem.totalPrice : state.totalAmount = state.totalAmount + newItem.price
            if (!existingItem) {

                state.items.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    name: newItem.name,
                    img: newItem.img,
                    quantity: newItem.quantity ? newItem.quantity : 1,
                    totalPrice: newItem.price
                })
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItemFromCart(state, action) {
            state.totalQuantity = state.totalQuantity - 1;
            state.totalAmount = state.totalAmount - action.payload.price
            const id = action.payload.id
            const existingItem = state.items.find(item => item.itemId === id)
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.itemId !== id)
            }
            else {
                existingItem.quantity = existingItem.quantity - 1;
                existingItem.totalPrice = existingItem.totalPrice - action.payload.price
            }
        },
        setCartId(state, action) {
            state.cartId = action.payload;
        },
        userLoggedOut(state, action) {
            state.items = action.payload.items
            state.totalQuantity = action.payload.totalQuantity
            state.totalAmount = action.payload.totalAmount
            state.cartId = action.payload.cartId
        },
        getNewCartAfterCheckOut(state, action) {
            state.items = action.payload.items
            state.totalQuantity = action.payload.totalQuantity
            state.totalAmount = action.payload.totalAmount
            state.cartId = action.payload.cartId
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice