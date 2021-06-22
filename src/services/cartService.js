import axios from 'axios'



async function getusercart(id) {

    return await (await axios.get(`https://thawing-reef-89327.herokuapp.com/api/cart/user/${id}`))

}
async function sendOrder(orderForm) {

    const res = await axios.post(`https://thawing-reef-89327.herokuapp.com/api/orders/set/order`,
        orderForm, {
        headers: {
            'x-auth-token': localStorage.getItem('user')
        }

    })
    return res
}
async function closecart() {

    const res = await axios.post(`https://thawing-reef-89327.herokuapp.com/api/cart/close/mycart`, {},
        {
            headers: {
                'x-auth-token': localStorage.getItem('user')
            }

        })
    return res
}

export {
    getusercart,
    sendOrder,
    closecart
}