import React from "react";
import ReactDOM from "react-dom";
import RegisterComp from "./Registers";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RegisterComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
