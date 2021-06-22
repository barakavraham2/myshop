import { useState, useEffect } from "react"
import ProductV2 from '../components/ProductV2'
import { useSelector } from "react-redux"
import TopNavLayOut from '../components/TopNavLayOut'
function SearchPage() {
    const [products, setProducts] = useState([])
    const state = useSelector(state => state.search.items)
    useEffect(() => {
        setProducts(state)
        return () => {
            setProducts([]);
        };
    }, [])

    return (
        <TopNavLayOut>
            <div style={{ marginTop: '10rem' }}>
                <div className="wrap cf">
                    <h1 className="projTitle">Search Resulte</h1>
                </div>
            </div>
            <div className="bestselling-furniture-cards">
                {
                    products.map(product => {
                        return <ProductV2 key={Math.floor(100000 + Math.random() * 900000)} product={product} />
                    })}
            </div>
        </TopNavLayOut>
    )
}

export default SearchPage
