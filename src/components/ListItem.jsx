import React from "react";
import { DragSource } from "react-dnd";

const listItemStyle = {
  background: "whitesmoke",
  margin: "10px",
  padding: "10px",
  cursor: "move"
};

const ListItem = ({ data, isDragging, connectDragSource }) => {
  const opacity = isDragging ? 0.4 : 1;

  return connectDragSource(
    <div style={{ ...listItemStyle, opacity }}>{data.name}</div>
  );
};

export default DragSource(
  props => props.type,
  {
    beginDrag: props => ({
      id: props.data.id,
      name: props.data.name,
      data: props.data,
      type: "listitem"
    })
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)(ListItem);
