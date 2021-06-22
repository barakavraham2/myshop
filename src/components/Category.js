import { useState, useEffect } from "react"
import { getProductsFromCategory } from "../services/storeData"
import MainPageLayOut from "./MainPageLayOut"
import ProductV2 from './ProductV2'

function Category(props) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProductsFromCategory(props.value).then(res => setProducts(res))
    }, [])
    return (
        <MainPageLayOut>
            <div className="bestselling-furniture-cards">
                {products.map(product => {
                    return <ProductV2 key={product.id} product={product} />
                })}
            </div>
        </MainPageLayOut>
    )
}

export default Category
