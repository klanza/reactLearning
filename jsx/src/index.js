// Import React statements
import React from "react";
import ReactDOM from "react-dom";

// Create the component

const App = () => {
  // Not able to display objects as text
  const buttonText = { text: "Click me!" };
  const labelText = "Enter name:";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// Display react component on the screen
