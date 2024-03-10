// nested html structure
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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
