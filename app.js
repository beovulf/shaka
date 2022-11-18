"use strict";

import { init, component, EventBus } from "./shaka.js";
import { Hero } from "./components/index.js";

const render = () =>
  init("main", [
    component({ type: "h1", text: "1" }),
    Hero({ set: true }),
    component({
      type: "ul",
      text: "2",
      children: [
        component({
          type: "li",
          text: "2_1",
        }),
        component({
          type: "li",
          text: "2_2",
        }),
        component({
          type: "li",
          text: "2_3",
        }),
      ],
    }),
    //   component("nav", "3", [
    //     component("p", "3_1"),
    //     component("ol", "3_2", [
    //       component("li", "3_1_1"),
    //       component("li", "3_1_2"),
    //       component("li", "3_1_3"),
    //     ]),
    //     component("span", "3_2"),
    //   ]),
    //   component("h4", "4"),
    //   component("h5", "5"),
  ]);

render();
EventBus.$on("store", () => render());
