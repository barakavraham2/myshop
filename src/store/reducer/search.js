import { createSlice } from '@reduxjs/toolkit'



const searchSlice = createSlice({
    name: 'search',
    initialState: {
        items: []
    },
    reducers: {
        addItemsRelated(state, action) {
            const newItem = action.payload
            state.items.push({
                itemId: newItem.id,
                price: newItem.price,
                name: newItem.name,
                img: newItem.img,
                description: newItem.description
            })


        },
        emptySearch(state, action) {
            state.items = []
        }
    }
})

export const seacrhActions = searchSlice.actions;
export default searchSlice