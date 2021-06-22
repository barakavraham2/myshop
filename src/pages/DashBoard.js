import React from 'react'
import { Button } from 'react-bootstrap'
import TopNavLayOut from '../components/TopNavLayOut'
import UserTable from '../components/UserTable'


const DashBoard = () => {

    return (
        <TopNavLayOut>
            <div style={{ marginTop: '10rem' }}>
                <div className="wrap cf">
                    <h1 className="projTitle">USERS TABLE</h1>
                </div>
            </div>
            <div className="adminTable">   <UserTable /></div>

        </TopNavLayOut>
    )
}

export default DashBoard
