import axios from 'axios'
const apiEndPoint = 'https://thawing-reef-89327.herokuapp.com/api/users/adduser'
const apiLogin = 'https://thawing-reef-89327.herokuapp.com/auth/login'
const apiCreateCart = 'https://thawing-reef-89327.herokuapp.com/api/cart/create'
const axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": '*'
    }
}
async function registr(user) {
    return (axios.post(apiEndPoint, user, axiosConfig))
}
async function login(user) {
    return (axios.post(apiLogin, user, axiosConfig))
}
function logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('cartId')
}


function createCart(id) {
    return axios.post(apiCreateCart + `/${id}`)
}

function getCartId(userID) {
    return axios.get(`https://thawing-reef-89327.herokuapp.com2/api/cart/user/${userID}`)
}
export {
    registr,
    login,
    logout,
    createCart,
    getCartId
}