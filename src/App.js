import React from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import TouchBackend from "react-dnd-touch-backend";
import DraggableBox from "./components/boxtest/DraggableBox";
import Example from "./components/boxtest/Example";
function App() {
  const isTouchDevice = !!(
    "ontouchstart" in window || navigator.maxTouchPoints
  );

  return (
    <>
      <DndProvider backend={isTouchDevice ? TouchBackend : Backend}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ padding: "20px", width: "300px" }}>
            <Sidebar />
          </div>
          <div style={{ padding: "20px" }}>
            <Content />
          </div>
        </div>
        <div>
          <Example />
        </div>
      </DndProvider>
    </>
  );
}

export default App;
