"use strict";

import { component } from "../shaka.js";

const Image = ({ ...props }) =>
  component({
    type: "img",
    ...props,
  });

export default Image;
