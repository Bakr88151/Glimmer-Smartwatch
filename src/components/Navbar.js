import React from "react";
import '../utils/navbar.css'

export default function Navbar(){
    return(
        <nav>
            <h1 className="navbar_header">Glimmer Smartwatch</h1>
            <div className="navbar_items">
                <span className="nabra_item">About us</span>
                <span className="nabra_item">contact us</span>
                <span className="nabra_item">Home</span>
            </div>
        </nav>
    )
}