"use strict";

import { component } from "../shaka.js";
import { Button, Image } from "./index.js";
import { EventBus, store } from "../shaka.js";

const Title = component({ type: "h1", text: "Hero text", style: {} });

var active = true;

Title.style.color = "red";

setTimeout(() => {
  EventBus.$on("buttonClick", (params) => {
    active = !active;
    Title.style.color = active ? "red" : "blue";
    Title.textContent = active ? "test" : "test1";
  });
}, 0);

EventBus.$emit("store", {
  counter: 0,
});

function handleClick() {
  EventBus.$emit("store", {
    counter: store.counter + 1,
  });

  console.log("updated", store.counter);
}

const Hero = ({ ...props }) =>
  component({
    type: "div",
    children: [
      Title,
      Image({
        src: "https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg",
        alt: "Landscape photo",
      }),
      Button({ text: "Click me", classNames: "button" }),
      component({ type: "p", text: store?.counter }),
      component({ type: "button", text: "update store", onClick: handleClick }),
    ],
  });

export default Hero;
