import React, { useState, useEffect } from 'react'
import Home from './Home'
import Welcome from '../components/Welcome'
import jwt_decode from 'jwt-decode'


function LandingPage() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        try {
            const user1 = localStorage.getItem('user')
            if (user1) {

                setUser(jwt_decode(user1))

            }

        }
        catch { }
    }, [])
    return (

        (user === null) ?
            <Welcome />
            : <Home />
    )
}

export default LandingPage
