import React from 'react'
import TopNavSelector from './TopNavSelector'

const TopNavLayOut = ({ children }) => {

    return (
        <React.Fragment>
            <TopNavSelector />

            {children}
        </React.Fragment>
    )
}

export default TopNavLayOut
