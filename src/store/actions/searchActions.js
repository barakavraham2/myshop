import axios from "axios"
import { useSelector } from "react-redux"
import { seacrhActions } from "../reducer/search"

export const searchItem = (keyWord) => {
    const endpoint = 'https://thawing-reef-89327.herokuapp.com/api/products/search/product'
    return async (dispatch) => {
        const fetchItems = async (keyWord) => {

            const res = await axios.post(endpoint, { keyWord })
            const arr = res.data;
            arr.forEach(item => {
                dispatch(seacrhActions.addItemsRelated({
                    id: item.id,
                    price: item.price,
                    name: item.name,
                    img: item.img,
                    description: item.description
                }))
            });

        }
        fetchItems(keyWord)

    }
}