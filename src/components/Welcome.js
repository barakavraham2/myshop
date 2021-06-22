import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Login from './Login'
import Register from './Register'
import video from '../images/b.mp4'

function Welcome() {
    const [LogInTrigger, setLogInTrigger] = useState(false)
    const [RegisterTrigger, setRegisterTrigger] = useState(false)
    return (
        <div className="landpage">
            <div className="LandPage-container">
                <div className="box box1">

                </div>
                <div className="box box2">
                    <div className="banner">
                        <h1 className="banner-heading">Welcome to myshop</h1>
                        <p className="banner-paragraph">Make your life luxurious</p>
                        <div className="banner-Buttons">
                            <Button className="bannerButton" onClick={() => setLogInTrigger(!LogInTrigger)}>Log in</Button>
                            <Button className="bannerButton" onClick={() => setRegisterTrigger(!RegisterTrigger)}>Regiter</Button>
                        </div>
                    </div>

                </div>
                <div className="box box3">

                    <video autoPlay loop muted className="video">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
            <Login trigger={LogInTrigger} setTrigger={setLogInTrigger} />
            <Register trigger={RegisterTrigger} setTrigger={setRegisterTrigger} />
        </div>

    )
}

export default Welcome
