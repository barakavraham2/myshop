import React, { useState } from 'react'
import { Button, Form, Alert } from 'react-bootstrap'
import { getCartId, login } from '../services/auth';
import { useHistory } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/reducer/cart';
import { authActions } from '../store/reducer/auth';
import { getusercart } from '../services/cartService';
import { fetchCartFromDb } from '../store/actions/cartActions';
export const Login = (props) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [errorMassege, setErrorMassege] = useState('')
    async function handleSubmit() {
        await login(user)
            .then(res => {
                const user = jwt_decode(res.headers['x-auth-token'])
                localStorage.setItem('user', res.headers['x-auth-token'])
                getusercart(user.id).then(res => {
                    localStorage.setItem('cartId', res.data.id);
                    dispatch(cartActions.setCartId(res.data.id))
                    dispatch(fetchCartFromDb(res.data.id))
                })
                history.push('/home')
                getCartId(user.id).then(res => dispatch(cartActions.setCartId(res.data.id)))
                dispatch(authActions.loggedin({ id: user.id, userName: user.name, email: user.email, role: user.role }))
                dispatch(cartActions.setCartId())
            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    setErrorMassege(err.response.data)
                }
            }
            )

    }
    return (props.trigger) ? (
        <div className="form-popup">

            <Form className="form-container" >
                <div className="FormHeadLine">
                    <h1>Log in</h1>
                </div>
                <div className="FormInput">
                    <div className="form-group floating-label">
                        <input id="textarea-with-placeholder" className="form-control" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                        <label htmlFor="textarea-with-placeholder">Email</label>
                    </div>
                    <div className="form-group floating-label">
                        <input id="textarea-with-placeholder" className="form-control" type="password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                        <label htmlFor="textarea-with-placeholder">Password</label>
                    </div>
                </div>
                {errorMassege && <Alert variant='danger' className="alertRegistern">
                    {errorMassege}
                </Alert>}
                <div className="FormButtons">
                    <Button className="formButton" onClick={() => handleSubmit()}>log in</Button>
                    <Button className="formButton" onClick={() => { props.setTrigger(false); setErrorMassege('') }}>close</Button>
                </div>
            </Form>
        </div >
    ) : ''
}

export default Login