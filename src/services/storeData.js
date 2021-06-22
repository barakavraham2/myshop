import axios from 'axios'

async function getCategoris() {
    const data = await axios.get('https://thawing-reef-89327.herokuapp.com/api/category/all')
    return data.data
}
async function getProductsFromCategory(id) {
    const data = await axios.get(`https://thawing-reef-89327.herokuapp.com/api/products/productsByCategory/${id}`)
    return data.data
}
async function sendNewProduct(product) {
    const res = await axios.post(`https://thawing-reef-89327.herokuapp.com/api/products/add/product`, {
        name: product.name,
        img: product.img,
        price: product.price,
        category: product.category,
        description: product.description

    }, {
        headers: {
            'x-auth-token': localStorage.getItem('user')
        }
    })
    return res.data
}
async function editProduct(product) {
    const res = await axios.put(`https://thawing-reef-89327.herokuapp.com/api/products/edit/product/${product.id}`, {
        name: product.name,
        img: product.img,
        price: product.price,
        description: product.description

    }, {
        headers: {
            'x-auth-token': localStorage.getItem('user')
        }
    })
    return res.data
}
export {
    getCategoris,
    getProductsFromCategory,
    sendNewProduct,
    editProduct
}