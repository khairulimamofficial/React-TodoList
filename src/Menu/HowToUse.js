import React from 'react';

// custom
import '../App.css';

//import image
import use1 from '../img/Group 15.png'
import use2 from '../img/Group 16.png'

export default function home(){
    return(
        <div className="main">
            <div>
                <h1>How to use?</h1>
                <h2 style={{color: "#707070"}}>It's easy</h2>
                <h3 style={{display: "inline", marginLeft: "130px", fontSize: "18px", color: "#707070"}}>Standar Task</h3>
                <h3 style={{display: "inline", marginLeft: "250px", fontSize: "18px", color: "#707070"}}>Progress Task</h3>
            </div>
                <img src={use1} width="40%" style={{padding: "0px 10px"}} alt="fotoku"/>
                <img src={use2} width="40%" style={{padding: "0px 10px"}} alt="fotoku"/>
            <div>

            </div>
        </div>
    )
}