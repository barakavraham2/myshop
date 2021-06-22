import React from 'react'
import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router';
import { registr, createCart } from '../services/auth';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/reducer/cart';
import { authActions } from '../store/reducer/auth';

const Register = (props) => {
    const history = useHistory()
    const dispatch = useDispatch();
    const [RegisterUser, setAllRegisterUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        city: '',
        street: '',
    });
    const [errorMassege, setErrorMassege] = useState('')

    async function handleSubmit() {
        try {
            await registr(RegisterUser)
                .then(res => {
                    localStorage.setItem('user', res.headers['x-auth-token'])
                    createCart(res.data.id).then(res => {
                        localStorage.setItem('cartId', res.data.id);
                        dispatch(cartActions.setCartId(res.data.id))
                    })
                    history.push('/home')
                    dispatch(authActions.register({ name: RegisterUser.firstName, email: RegisterUser.email, role: 2 }))
                })
                .catch(err => {
                    if (err.response && err.response.status === 400) {
                        console.log(err.response)
                    }
                }
                )
        } catch (err) {
            //...
        }

    }

    return (props.trigger) ? (

        <div className="form-popup">

            <Form className="form-container" >
                <div className="FormHeadLine">
                    <h1>Register</h1>
                </div>


                <div className="FormInput">
                    <div className="form-group floating-label">
                        <input id="textarea-with-placeholder" className="form-control" onChange={(e) => { setAllRegisterUser({ ...RegisterUser, firstName: e.target.value }) }} />
                        <label htmlFor="textarea-with-placeholder">first name</label>
                    </div>
                    <div className="form-group floating-label">
                        <input id="textarea-with-placeholder" className="form-control" onChange={(e) => { setAllRegisterUser({ ...RegisterUser, lastName: e.target.value }) }} />
                        <label htmlFor="textarea-with-placeholder">last name</label>
                    </div>
                    <div className="form-group floating-label">
                        <input id="textarea-with-placeholder" className="form-control" onChange={(e) => { setAllRegisterUser({ ...RegisterUser, email: e.target.value }) }} />
                        <label htmlFor="textarea-with-placeholder">Email</label>
                    </div>
                    <div className="form-group floating-label">
                        <input id="textarea-with-placeholder" className="form-control" onChange={(e) => { setAllRegisterUser({ ...RegisterUser, password: e.target.value }) }} />
                        <label htmlFor="textarea-with-placeholder">Password</label>
                    </div>
                    <div className="form-group floating-label">
                        <input id="textarea-with-placeholder" className="form-control" onChange={(e) => { setAllRegisterUser({ ...RegisterUser, city: e.target.value }) }} />
                        <label htmlFor="textarea-with-placeholder">city</label>
                    </div>
                    <div className="form-group floating-label">
                        <input id="textarea-with-placeholder" className="form-control" onChange={(e) => { setAllRegisterUser({ ...RegisterUser, street: e.target.value }) }} />
                        <label htmlFor="textarea-with-placeholder">street</label>
                    </div>
                </div>

                {errorMassege && <Alert variant='danger' className="alertRegistern">
                    {errorMassege}
                </Alert>}

                <div className="FormButtons">
                    <Button className="formButton" onClick={() => handleSubmit()}>Register</Button>
                    <Button className="formButton" onClick={() => { props.setTrigger(false); setErrorMassege('') }}>close</Button>
                </div>
            </Form>
        </div >
    ) : ''
}

export default Register
