import React from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import ItemTypes from "./ItemTypes";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <DndProvider backend={Backend}>
        <div style={{ padding: "20px", width: "300px" }}>
          <Sidebar />
        </div>
        <div style={{ padding: "20px" }}>
          <Content />
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
