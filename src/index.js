import React from "react";
import reactDom from "react-dom";

const date = new Date();
const currentDate = date.getHours();

let greeting;

const customStyle = {
  color: ""
};

if (currentDate < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentDate > 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

reactDom.render(
  <div>
    <h1 style={customStyle}>{greeting}</h1>
  </div>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
