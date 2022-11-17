"use strict";

import { init, component } from "./shaka.js";

init("main", [
  component("h1", "1"),
  component("ul", "2", [
    component("li", "2_1"),
    component("li", "2_2"),
    component("li", "2_3"),
  ]),
  component("nav", "3", [
    component("p", "3_1"),
    component("ol", "3_2", [
      component("li", "3_1_1"),
      component("li", "3_1_2"),
      component("li", "3_1_3"),
    ]),
    component("span", "3_2"),
  ]),
  component("h4", "4"),
  component("h5", "5"),
]);