import React from 'react'
import Items from "../components/Items";
import soapImage from "../images/soap.jpg";
import pasteImage from "../images/paste.jpg";

export default function toiletries() {
    return (
        <div className="container-fluid">
        <div className="row">
        <Items name="Bath Bar" image={soapImage} brand="Olay" quantity="1" />

       <Items name="Toothpaste" image={pasteImage} brand="Colgate" quantity="1"/>
        </div>
    </div>
    )
}
