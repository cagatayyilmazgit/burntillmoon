import React from "react";

export default function Navbar() {
    return(
        <nav className="Navbar">
            <div className="logo">BURNTILLMOON</div>
            <ul>
                <li>TOKENS</li>
                <li>TOP-LIST</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
            <div className="menu">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    )
}