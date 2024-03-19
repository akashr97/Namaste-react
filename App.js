import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
const heading = (<h1 className='head' tabIndex="5">Namaste React using JSX</h1>);

// React Functional Component
const HeadingComponent = () => {
  return <h1>Namaste React Functional Component1</h1>;
};

const number = 10000;

// Calling one component inside another component is called component composition
const HeadingComponent2 = () => {
  return (
    <>
      // Inserting a JS script using {}
      {number}
      {heading} // React element
      <h1>Namaste React Functional Component2</h1>
      <HeadingComponent />
      {HeadingComponent()} {/* Correct way to invoke and render a functional component */}
    </>
  );
};

const elem = <span>React Element</span>;
const title = (
  <>
    <h1>
      {elem}
    </h1>
    <HeadingComponent2 />
  </>
);


const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "heading" }, "Hello React"),React.createElement("h2", { id: "heading" }, "Hello React2")]
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);  // Rendering the component
