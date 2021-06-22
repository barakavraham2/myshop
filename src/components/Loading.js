import { useState, useEffect } from "react"
import MainPageLayOut from "./MainPageLayOut"
import TopNavLayOut from "./TopNavLayOut"


const Loading = (props) => {

    return (
        <TopNavLayOut>
            <div className="loadingBar">
                <div className="ball1"></div>
                <div className="ball2"></div>
                <div className="ball3"></div>
            </div>
        </TopNavLayOut>

    )
}


export default Loading