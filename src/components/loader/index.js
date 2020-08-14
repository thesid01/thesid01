import React from 'react'
import './index.css'

export function Loader() {
    return (
        <>
            <div id="outerContainer">
                <div id="container">
                <div className="circle"></div>
                <div className="circle" style={{"animationDelay": "0s"}}></div>
                <div className="circle" style={{"animationDelay": "1s"}}></div>
                <div className="circle" style={{"animationDelay": "2s"}}></div>
                <div className="circle" style={{"animationDelay": "3s"}}></div>
                </div>
            </div>
        </>
    )
}


export default Loader
