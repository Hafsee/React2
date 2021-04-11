import Items from "../components/Items";
import React from "react";
import tomatoImage from "../images/tomatoes.jpg";
import onionImage from "../images/onion.jpg";
import potatoImage from "../images/potatoes.jpg";

export default function Fresh(){
    return(
        <div className="container-fluid">
        <div className="row">
        
        <Items name="Tomatoes" image={tomatoImage} brand="PC Organics" quantity="1"/>

        <Items name="Onion" image={onionImage} brand="No Name" quantity="1" />

        <Items name="Potatoes" image={potatoImage} brand="Farmers Market" quantity="1"/>
  
</div>
    </div>
  );
}