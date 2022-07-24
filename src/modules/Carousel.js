import React, { useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Tokens from "./Token";
import axios from "axios";
import tokenInfo from "../tokens.json"

const tokenGroups = document.getElementsByClassName("tokenGroup");
let counter = -80;
//#region Carousel
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
//#endregion

export default function Carousel(){
       
    // function getBurnedTokenAmount (tokensName) {
    //     let token = tokensName.result
    //     let result = axios.get('https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=' + tokenInfo.token[0] + '&address=' + tokenInfo.token[1] + '&apikey=' + tokenInfo.token[2])
    //     .then(res=>(res.data.result.slice(0,res.data.result.length - 18)),[])
    //     return result;
    // };
    const tokenName = ['bsw','quack','SFM'];
    const [burnedAmounts, setBurnedAmount] = useState([]);
    
    
    useEffect(() => {
        function getBurnedTokenAmount(){
            for(let i = 0; i < tokenName.length; i++){
                let token = tokenInfo[`${tokenName[i]}`][0];
                axios.get('https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=' + token.contractaddress + '&address=' + token.address + '&apikey=' + token.apikey).then(res => setBurnedAmount(prevArray => [...prevArray, res.data.result]));   
            }
        }
        getBurnedTokenAmount();
    },[])
        
    

    console.log()

    return(
        <div className="carousel-container">
            <div id="prevButtonContainer">
                <FontAwesomeIcon icon={faAngleLeft} size="2x" onClick={next} />
            </div>
            <div className="carousel">
            <div className="tokenGroup" id="firstClone">
                <Tokens 
                image="bsw.png" 
                burnedPercentage = {String(burnedAmounts[0]).slice(0,9).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                dailyBurnRate = "0,001" 
                price = "0,31"/>
                <Tokens 
                image="quack.png" 
                burnedPercentage = {String(burnedAmounts[1]).slice(0,17).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                dailyBurnRate = "0,001" 
                price = "0,31"/>
                <Tokens 
                image="sfm.png" 
                burnedPercentage = {String(burnedAmounts[2]).slice(0,12).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                dailyBurnRate = "0,001" 
                price = "0,31"/>
            </div>
                <div className="tokenGroup" id="tokenGroup1">
                    <div className="token">token1</div>
                    <div className="token">token2</div>
                    <div className="token">token3</div>
                </div>
                <div className="tokenGroup" id="tokenGroup2">
                    <Tokens 
                    image="bsw.png" 
                    burnedPercentage = {String(burnedAmounts[0]).slice(0,9).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    dailyBurnRate = "0,001" 
                    price = "0,31"/>
                    <Tokens 
                    image="quack.png" 
                    burnedPercentage = {String(burnedAmounts[1]).slice(0,17).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                    dailyBurnRate = "0,001" 
                    price = "0,31"/>
                    <Tokens 
                    image="sfm.png" 
                    burnedPercentage = {String(burnedAmounts[2]).slice(0,12).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                    dailyBurnRate = "0,001" 
                    price = "0,31"/>
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