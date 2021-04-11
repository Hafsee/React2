import React from 'react'
import Items from "../components/Items";
import salmonImage from "../images/salmon.jpg";
import beefImage from "../images/beef.jpg";
import mackerelImage from "../images/mackerel.jpg";
import chickenImage from "../images/chicken.jpg";


export default function protein() {
    return (
        <div className="container-fluid">
        <div className="row">
        
        <Items name="Salmon" image={salmonImage} brand="PC Organics" quantity="1"
        />

        <Items name="Beef" image={beefImage} brand="PC Organics" quantity="1" />

        <Items name="Mackerel" image={mackerelImage} brand="PC Organics" quantity="1"/>

        <Items name="Chicken" image={chickenImage} brand="PC Organics" quantity="1"/>

</div>
    </div>
    )
}
