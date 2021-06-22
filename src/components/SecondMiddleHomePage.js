import React from 'react'
import { Link } from 'react-router-dom'
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import card3 from '../images/card3.jpg'

function SecondMiddleHomePage() {
    return (
        <div className="SecondMidlleHome">
            <div className="a-box">
                <div className="img-container">
                    <div className="img-inner">
                        <div className="inner-skew">
                            <img src={card1} alt="wait for it"></img>
                        </div>
                    </div>
                </div>
                <div className="text-container">
                    <h3>free shipping</h3>
                    <div>Delivery will be confirmed at checkout
</div>
                </div>
            </div>
            <div className="a-box">
                <div className="img-container">
                    <div className="img-inner">
                        <div className="inner-skew">
                            <img src={card2} alt="wait for it"></img>
                        </div>
                    </div>
                </div>
                <div className="text-container">
                    <h3>easyreturns</h3>
                    <div>You can return any unworn items to a local address within 28 days for a full refund
</div>
                </div>
            </div>
            <div className="a-box">
                <div className="img-container">
                    <div className="img-inner">
                        <div className="inner-skew">
                            <img src={card3} alt="wait for it"></img>
                        </div>
                    </div>
                </div>
                <div className="text-container">
                    <h3>customer care</h3>
                    <div>24 hour customer service, our friendly advisors are waiting to assist you

</div>
                </div>
            </div>
        </div>
    )
}

export default SecondMiddleHomePage