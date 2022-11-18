"use strict";

import { component } from "../shaka.js";
import { EventBus } from "../app.js";

const Button = ({ ...props }) => {
  let active = false;

  const handleClick = (event) => {
    EventBus.$emit("buttonClick", {});
    active = !active;
    const element = event.target;
    element.textContent = active ? "1" : "2";
    element.style.color = active ? "red" : "blue";
    element.style.fontSize = active ? "10px" : "30px";
  };

  // Add publish-subscribe pattern to get sort of store aware components

  return component({
    type: "button",
    onClick: handleClick,
    ...props,
    text: active ? "1" : "2",
  });
};

export default Button;
