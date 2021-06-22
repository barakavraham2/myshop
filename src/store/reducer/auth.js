import { createSlice } from '@reduxjs/toolkit'
import jwt_decode from 'jwt-decode'
const user = localStorage.getItem('user')

const authSlice = createSlice({
    name: 'auth',
    initialState: { currentUser: (user) ? jwt_decode(user) : { id: '', name: '', email: '', role: '' } }
    ,
    reducers: {
        loggedin(state, action) {
            state.currentUser = {
                id: action.payload.id,
                name: action.payload.userName,
                email: action.payload.email,
                role: action.payload.role
            }

        },
        loggedout(state, action) {
            state.currentUser = {
                id: '',
                name: '',
                email: '',
                role: ''
            }
        },
        register(state, action) {
            state.currentUser = {
                name: action.payload.name,
                email: action.payload.email,
                role: action.payload.role
            }
        }
    }

})
export const authActions = authSlice.actions;
export default authSlice