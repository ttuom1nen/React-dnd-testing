import React from "react";
import { DragSource } from "react-dnd";

const dashletStyle = {
  background: "tomato",
  position: "absolute",
  height: "200px",
  width: "200px",
  cursor: "move"
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
    <div style={{ ...dashletStyle, opacity }}>
      <p>{data.id}</p>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <iframe src="https://www.w3schools.com" height="64px" width="64px" />
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
