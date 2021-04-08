import React from "react";
import Items from "../components/Items";
import coffeeImage from "../images/coffee.jpg";
import teaImage from "../images/tea.jpg";
import cerealImage from "../images/cereal.jpg";
import hotchocImage from "../images/milo.jpg";
import honeyImage from "../images/honey.jpg";


export default function Beverage() {
  return (
    <div className="container-fluid">
    <div className="row">
      <Items name="Coffee" image={coffeeImage} brand="Coffee" quantity="1" />

      <Items name="Tea" image={teaImage} brand="My Tea" quantity="13" />

      <Items name="Cereal" image={cerealImage} brand="Cereal" quantity="1" />

      <Items name="Milo" image={hotchocImage} brand="Milo" quantity="1" />
      <Items name="Honey" image={honeyImage} brand="No Name" quantity="1" />

      </div>
    </div>
  );
}
