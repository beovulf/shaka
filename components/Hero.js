"use strict";

import { component } from "../shaka.js";
import { Button, Image } from "./index.js";

const Title = component({ type: "h1", text: "Hero text", style: {} });

Title.style.color = "red";

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
    ],
  });

export default Hero;
