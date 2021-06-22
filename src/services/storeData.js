import axios from 'axios'

async function getCategoris() {
    const data = await axios.get('http://localhost:3002/api/category/all')
    return data.data
}
async function getProductsFromCategory(id) {
    const data = await axios.get(`http://localhost:3002/api/products/productsByCategory/${id}`)
    return data.data
}
async function sendNewProduct(product) {
    const res = await axios.post(`http://localhost:3002/api/products/add/product`, {
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
    const res = await axios.put(`http://localhost:3002/api/products/edit/product/${product.id}`, {
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