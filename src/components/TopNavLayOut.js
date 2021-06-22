import React from 'react'
import TopNav from './TopNav'

const TopNavLayOut = ({ children }) => {

    return (
        <React.Fragment>
            <TopNav />

            {children}
        </React.Fragment>
    )
}

export default TopNavLayOut
