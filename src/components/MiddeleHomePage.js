import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import shoes1 from '../images/shoes1.jpg'
import shoes2 from '../images/shoes2.jpg'
import shoes3 from '../images/shoes3.jpg'
import shoes4 from '../images/shoes4.jpg'
import shoes5 from '../images/shoes5.jpg'
function MiddeleHomePage() {
    return (
        <div>
            <div className="middleContainer">
                <div className="middle-grid">
                    <div className="pargh">
                        <div className="p-left">
                            <h1>Summer-ready </h1>
                            <p>Update your footwear for sunny days.</p>
                            <Button className="btn middleBtn"><Link to="/shoes">Explore now</Link></Button>
                        </div>

                    </div>
                    <div className="pargh2">
                        <div className="pic-ctn">
                            <img src={shoes1} alt="" className="pic"></img>
                            <img src={shoes2} alt="" className="pic"></img>
                            <img src={shoes3} alt="" className="pic"></img>
                            <img src={shoes4} alt="" className="pic"></img>
                            <img src={shoes5} alt="" className="pic"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddeleHomePage
