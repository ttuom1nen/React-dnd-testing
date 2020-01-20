import React from "react";
import { DragSource } from "react-dnd";
import Iframe from "./Iframe";

const dashletStyle = {
  position: "absolute",
  boxSizing: "border-box",
  height: "200px",
  width: "200px",
  padding: "10px",
  background: "white",
  cursor: "move",
  border: "1px solid rgba(0,0,0,0.1)",
  boxShadow: "0 0 8px 1px rgba(0,0,0,0.029)"
};

const Dashlet = ({
  data,
  index,
  name,
  type,
  isDropped,
  isDragging,
  connectDragSource,
  isOver
}) => {
  const opacity = isDragging ? 0.4 : 1;

  return connectDragSource(
    <div style={{ ...dashletStyle, opacity }} onClick={() => console.log(data)}>
      <p>{data.id}</p>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <Iframe url="https://www.w3schools.com" />
    </div>
  );
};

export default DragSource(
  props => props.type,
  {
    beginDrag: props => ({
      id: props.data.id,
      name: props.name,
      oldIndex: props.index,
      type: props.type
    })
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(Dashlet);
