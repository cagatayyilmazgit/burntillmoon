import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const tokenGroups = document.getElementsByClassName("tokenGroup");
let counter = -80;
console.log(counter/80)

function next(){
        console.log(counter/80)
        if(counter/80 >= 0) return;
        counter += 80;
        for(let i = 0; i < tokenGroups.length; i++){
            tokenGroups[i].style.transform = "translateX(" + counter + "vw)";
            tokenGroups[i].style.transition = "1s";
        }
    
}

function prev(){
        console.log(counter/80)
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
    return(
        <div className="carousel-container">
            <div id="prevButtonContainer">
                <FontAwesomeIcon icon={faAngleLeft} size="2x" onClick={next} />
            </div>
            <div className="carousel">
            <div className="tokenGroup" id="firstClone">
                <div className="token">token4</div>
                <div className="token">token5</div>
                <div className="token">token6</div>
            </div>
                <div className="tokenGroup" id="tokenGroup1">
                    <div className="token">token1</div>
                    <div className="token">token2</div>
                    <div className="token">token3</div>
                </div>
                <div className="tokenGroup" id="tokenGroup2">
                    <div className="token">token4</div>
                    <div className="token">token5</div>
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