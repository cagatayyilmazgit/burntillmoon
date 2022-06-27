import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Carousel(){
    return(
        <div className="carousel-container">
            <div id="prevButtonContainer">
                <FontAwesomeIcon icon={faAngleLeft} size="2x" />
            </div>
            <div className="carousel">
                <div className="token"></div>
                <div className="token"></div>
                <div className="token"></div>
                <div className="token"></div>
                <div className="token"></div>
                <div className="token"></div>
            </div>
            <div id="nextButtonContainer">
                <FontAwesomeIcon icon={faAngleRight} size="2x" />
            </div> 
        </div>
    )
}