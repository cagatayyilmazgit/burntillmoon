import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Tokens from "./Token";
import axios from "axios";
import tokenInfo from "../tokens.json"


const tokenGroups = document.getElementsByClassName("tokenGroup");
let counter = -80;

function next(){
        if(counter/80 >= 0) return;
        counter += 80;
        for(let i = 0; i < tokenGroups.length; i++){
            tokenGroups[i].style.transform = "translateX(" + counter + "vw)";
            tokenGroups[i].style.transition = "1s";
        }
    
}

function prev(){
        if(counter/80 <= -tokenGroups.length +1) return;
        counter -= 80;
        for(let i = 0; i < tokenGroups.length; i++){
        tokenGroups[i].style.transform = "translateX(" + counter + "vw)";
        tokenGroups[i].style.transition = "1s";
        }
    }


function transitionEnd(){
    
    if(tokenGroups[Math.abs(counter/80)].id === "lastClone"){
        counter = -80;
        for(let i = 0; i < tokenGroups.length; i++){
            tokenGroups[i].style.transition = "none";    
        }
        for(let i = 0; i < tokenGroups.length; i++){
            tokenGroups[i].style.transform = "translateX(" + counter + "vw)";
        }
    }
    if(tokenGroups[Math.abs(counter/80)].id === "firstClone"){
        counter = -160;
        for(let i = 0; i < tokenGroups.length; i++){
            tokenGroups[i].style.transition = "none";    
        }
        for(let i = 0; i < tokenGroups.length; i++){
            tokenGroups[i].style.transform = "translateX(" + counter + "vw)";
        }
    }
}  


export default function Carousel(){
       
    const [burnedBSW, setBurnedBSW] = useState();

    useEffect((contract) => {
        // BSW
        contract = tokenInfo.bsw[0].contractaddress;
        axios
            .get('https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=' + contract + '&address=0x000000000000000000000000000000000000dead&apikey=IAFC45SXZ1G5J3D85S3VJJ4Q7USKK38CEM')
            .then(res=>{setBurnedBSW(res.data.result.slice(0,res.data.result.length - 18))})
    }, [])

    return(
        <div className="carousel-container">
            <div id="prevButtonContainer">
                <FontAwesomeIcon icon={faAngleLeft} size="2x" onClick={next} />
            </div>
            <div className="carousel">
            <div className="tokenGroup" id="firstClone">
                <Tokens 
                image="bsw" 
                burnedPercentage = "0"
                dailyBurnRate = "0,001" 
                price = "0,31"/>
                <Tokens image="avax.png" burnedPercentage = "59" dailyBurnRate = "0,001" price = "0,31"/>
                <div className="token">token6</div>
            </div>
                <div className="tokenGroup" id="tokenGroup1">
                    <div className="token">token1</div>
                    <div className="token">token2</div>
                    <div className="token">token3</div>
                </div>
                <div className="tokenGroup" id="tokenGroup2">
                    <Tokens image="bsw.png" burnedPercentage = {burnedBSW} dailyBurnRate = "0,001" price = "0,31"/>
                    <Tokens image="avax.png" burnedPercentage = "59" dailyBurnRate = "0,001" price = "0,31"/>
                    <div className="token">token6</div>
                </div>
                <div className="tokenGroup" id="lastClone" onTransitionEnd={transitionEnd}>
                    <div className="token">token1</div>
                    <div className="token">token2</div>
                    <div className="token">token3</div>
                </div>    
            </div>
            <div id="nextButtonContainer">
                <FontAwesomeIcon icon={faAngleRight} size="2x" onClick={prev}/>
            </div> 
        </div>
    )
}