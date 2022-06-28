import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const tokens = document.getElementsByClassName("token");

let counter = 0;

function next(){
    counter += 80;

    for(let i = 0; i < 3; i++){
        tokens.parentNode.insertBefore(tokens[tokens.length-i], tokens.parentNode[0]);
        console.log("loop worked")
    }
    
    for(let i = 0; i < 3; i++){
        tokens.parentNode.removeChild(tokens[tokens.length - i]);
    }

    for(let i = 0; i < tokens.length; i++){
        tokens[i].style.transform = "translate(" + counter + "vw,0)";
    }
}
function prev(){
    counter -= 80;
    for(let i = 0; i < tokens.length; i++){
        tokens[i].style.transform = "translate(" + counter + "vw,0)"
    }
}


export default function Carousel(){
    return(
        <div className="carousel-container">
            <div id="prevButtonContainer">
                <FontAwesomeIcon icon={faAngleLeft} size="2x" onClick={prev} />
            </div>
            <div className="carousel">
                <div className="token">token1</div>
                <div className="token">token2</div>
                <div className="token">token3</div>
                <div className="token">token4</div>
                <div className="token">token5</div>
                <div className="token">token6</div>
            </div>
            <div id="nextButtonContainer">
                <FontAwesomeIcon icon={faAngleRight} size="2x" onClick={next}/>
            </div> 
        </div>
    )
}