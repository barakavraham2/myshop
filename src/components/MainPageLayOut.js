import React from 'react'
import MainNavBar from './MainNavBar'
import TopNavSelector from './TopNavSelector'

const MainPageLayOut = ({ children }) => {

    return (
        <>
            <TopNavSelector />
            <MainNavBar />
            {children}
        </>
    )
}

export default MainPageLayOut
