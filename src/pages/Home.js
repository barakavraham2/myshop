import React from 'react'
import MainPageLayOut from '../components/MainPageLayOut'
import MiddeleHomePage from '../components/MiddeleHomePage'
import ProductV2 from '../components/ProductV2'
import SecondMiddleHomePage from '../components/SecondMiddleHomePage'
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
import banner3 from '../images/banner3.jpg'
import banner4 from '../images/banner4.jpg'
export const Home = () => {
    return (
        <MainPageLayOut>
            <section className="banner">
                <div className="banner-content">

                </div>
                <div className="slideshow">
                    <button className="slide-btn slide-btn-1"></button>
                    <button className="slide-btn slide-btn-2"></button>
                    <button className="slide-btn slide-btn-3"></button>
                    <button className="slide-btn slide-btn-4"></button>
                    <div className="slideshow-wrapper">
                        <div className="slide">
                            <img src={banner1} alt=""></img>
                        </div>
                        <div className="slide">
                            <img src={banner2} alt=""></img>
                        </div>
                        <div className="slide">
                            <img src={banner3} alt=""></img>
                        </div>
                        <div className="slide">
                            <img src={banner4} alt=""></img>
                        </div>
                    </div>
                </div>

            </section>
            <SecondMiddleHomePage />
            <MiddeleHomePage />
        </MainPageLayOut>
    )
}

export default Home