import Items from "../components/Items";
import React from "react";
import riceImage from "../images/rice.jpg";
import couscousImage from "../images/cous-cous.jpg";

export default function Dryfood() {
    return (
        <div className="container-fluid">
        <div className="row">
        <Items name="Rice" image={riceImage} brand="No name" quantity="1" />

<Items name="Cous Cous" image={couscousImage} brand="Zinda" quantity="1"/> 
       
 
</div>
    </div>
  );
}



