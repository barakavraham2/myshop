import React from 'react'
import MainNavBar from './MainNavBar'
import TopNav from './TopNav'

const MainPageLayOut = ({ children }) => {

    return (
        <>
            <TopNav />
            <MainNavBar />
            {children}
        </>
    )
}

export default MainPageLayOut
