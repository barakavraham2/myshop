import react, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';
import { logout } from '../services/auth'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/reducer/auth'
import { cartActions } from '../store/reducer/cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/fontawesome-free-solid'
import AdminNav from './AdminNav';

const TopNavMobile = () => {

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

        <div className="fixed-top container-topnav-mobile">
            <Nav className="first-nav-mobile">
                <Nav.Item as="li" className="first-nav-list-mobile">
                    <button className="btnNoStyle" onClick={() => handleLogOut()}><FontAwesomeIcon icon={Icons.faSignOutAlt}></FontAwesomeIcon></button>
                </Nav.Item>
                <Nav.Item as="li" className="first-nav-list-mobile">
                    <button className="btnNoStyle" onClick={() => setShowModal(true)}><FontAwesomeIcon icon={Icons.faSearch}></FontAwesomeIcon></button>
                </Nav.Item>
                <Nav.Item className="first-nav-list-mobile">
                    <Link className="first-nav-link-mobile" to="/cart"><FontAwesomeIcon icon={Icons.faShoppingCart}></FontAwesomeIcon>{(cartQuntity > 0) ? <span className="badge">{cartQuntity} </span> : ''} </Link>
                </Nav.Item>
                <Nav.Item as="li" className="first-nav-list-mobile">
                    <Link className="first-nav-link-mobile" to="/home" alt="logOut"><FontAwesomeIcon icon={Icons.faHome}></FontAwesomeIcon></Link>
                </Nav.Item>
                <Nav.Item as="li" className="first-nav-list-mobile">
                    <Link className="first-nav-link-mobile" to="/profile"><FontAwesomeIcon icon={Icons.faUser}></FontAwesomeIcon></Link>
                </Nav.Item>
                {userRole === 2 ? <AdminNav /> : ""}
            </Nav>
        </div>
    )


}
export default TopNavMobile

