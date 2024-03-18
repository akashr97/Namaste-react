import React from 'react'
import ReactDOM from'react-dom/client'


// nested html structure
// React.createElement ==> Object  ==>HTMLElement(on render)
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "heading" }, "Hello React"),React.createElement("h2", { id: "heading" }, "Hello React2")]
  )
);

console.log(parent); //object

// JSX - HTML like or XML like syntax

const jsxHeading =  <h1 id="heading">Namaste React using JSX</h1> 

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("object root: ",root);
root.render(jsxHeading);
