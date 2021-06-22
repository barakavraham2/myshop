import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Icon from 'awesome-react-icons'
import { Nav } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';
import { logout } from '../services/auth'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/reducer/auth'
import { cartActions } from '../store/reducer/cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/fontawesome-free-solid'
import SearchModal from './SearchModal';
import AdminNav from './AdminNav';



const TopNav = () => {

    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const cartQuntity = useSelector(state => (state.cart.totalQuantity))
    const user = useSelector(state => state.auth.currentUser.name)
    const userRole = useSelector(state => state.auth.currentUser.role)
    const history = useHistory()

    function handleLogOut() {
        logout()
        history.push('/')
        dispatch(authActions.loggedout())
        dispatch(cartActions.setCartId(''))
        dispatch(cartActions.userLoggedOut({
            totalQuantity: 0,
            totalAmount: 0,
            cartId: '',
            items: []
        }))

    }
    return (
        <div className="fixed-top container-topnav">
            <div className="social-icons">
                <a target="_blank" href="   https://www.instagram.com/barakavrahamm/"><Icon name="instagram" className="social-icon-item"></Icon></a>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100007088413350"><Icon name="facebook" className="social-icon-item"></Icon></a>
                <a target="_blank" href="https://twitter.com/barakavraam"><Icon name="twitter" className="social-icon-item"></Icon></a>
            </div>
            {userRole === 2 ? <AdminNav /> : ""}
            <Nav className="first-nav">
                <Nav.Item as="li" className="first-nav-list">
                    <button className="btnNoStyle" onClick={() => handleLogOut()}><FontAwesomeIcon icon={Icons.faSignOutAlt}></FontAwesomeIcon></button>
                </Nav.Item>
                <Nav.Item as="li" className="first-nav-list">
                    <button className="btnNoStyle" onClick={() => setShowModal(true)}><FontAwesomeIcon icon={Icons.faSearch}></FontAwesomeIcon></button>
                </Nav.Item>
                <Nav.Item className="first-nav-list">
                    <Link className="first-nav-link" to="/cart"><FontAwesomeIcon icon={Icons.faShoppingCart}></FontAwesomeIcon>{(cartQuntity > 0) ? <span className="badge">{cartQuntity} </span> : ''} </Link>
                </Nav.Item>
                <Nav.Item as="li" className="first-nav-list">
                    <Link className="first-nav-link" to="/home" alt="logOut"><FontAwesomeIcon icon={Icons.faHome}></FontAwesomeIcon></Link>
                </Nav.Item>
                <Nav.Item as="li" className="first-nav-list">
                    <Link className="first-nav-link" to="/profile"><FontAwesomeIcon icon={Icons.faUser}></FontAwesomeIcon> {user}</Link>
                </Nav.Item>
            </Nav>


            <SearchModal show={showModal} setShowModal={setShowModal} />



        </div >
    )
}

export default TopNav
