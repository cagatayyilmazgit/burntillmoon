import React from "react"

export default function Tokens(props){
    return(
    <div className="token">
    <img src={`/images/${props.image}`} className="tokenImage"></img>
    <div>%{props.burnedPercentage} BURNED</div>
    <div>AVERAGE DAILY BURN RATE - {props.dailyBurnRate}</div>
    <div>PRICE - {props.price}$</div>
    <div>TOP TEN HOLDER PERCENTAGE - {props.topTenHolder}</div>
    </div>
    )
    
}
