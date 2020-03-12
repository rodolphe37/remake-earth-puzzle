import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import ReactDOM from "react-dom";
import App from "./App";
import { GridProvider } from "./components/GridContext";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import './index.css'

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <GridProvider>
      <BackgroundVideo />
      <App />
    </GridProvider>
  </DndProvider>,
  document.getElementById("root")
);
