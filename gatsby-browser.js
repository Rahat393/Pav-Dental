import "./src/styles/global.css";
import React from "react";
import RootElement from "./src/components/RootElement";
import { Script } from "gatsby";

export const wrapPageElement = ({ element }) => (
  <RootElement>
    {element}
    <Script
      src="https://static.elfsight.com/platform/platform.js"
      data-use-service-core
      defer
    />
    <div
      class="elfsight-app-eb76ed36-4b10-4913-ab07-b087d40a6c72"
      data-elfsight-app-lazy
    ></div>
  </RootElement>
);
