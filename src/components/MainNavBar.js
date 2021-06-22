import React, { useState, useEffect } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getCategoris } from '../services/storeData'

const MainNavBar = () => {
    const [categoris, setCategoris] = useState([])
    useEffect(() => {
        getCategoris().then(res => { setCategoris(res) })
    }, [])
    return (
        <Nav className="second-nav" style={{ marginTop: "100px" }}>
            {
                categoris.map(category => {
                    return <Nav.Item className="second-nav-list" key={category.name}>
                        <div className="second-nav-item">
                            <Link className="second-nav-link" to={category.name}>{category.name}</Link>
                        </div>
                    </Nav.Item>
                })
            }

        </Nav>
    )
}

export default MainNavBar
