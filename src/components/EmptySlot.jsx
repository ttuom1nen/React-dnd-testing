import React from "react";
import { DropTarget } from "react-dnd";
import Dashlet from "./Dashlet";

const emptySlotStyle = {
  display: "inline-block",
  position: "relative",
  height: "220px",
  width: "220px",
  margin: "10px",
  border: "1px solid white",
  borderRadius: "3px",
  boxSizing: "border-box",
};

const emptyContainerStyle = {
  display: "flex",
  height: "100%",
  width: "100%",
  justifyContent: "center",
  alignItems: "center"
};

const EmptySlot = ({
  index,
  accepts,
  isOver,
  canDrop,
  allowedDropEffect,
  connectDropTarget,
  lastDroppedItem,
  isDropped
}) => {
  const isActive = isOver && canDrop;
  let additionalStyling = {
    backgroundColor: "#fafafa",
    border: ""
  }

  if (isActive) {
    additionalStyling.border = "1px solid rgba(0,0,0,0.15)";
    additionalStyling.backgroundColor = "#F9F9F9";
  } else if (canDrop) {
    additionalStyling.backgroundColor = "#f7f7f7";
  }

  return connectDropTarget(
    <div style={{ ...emptySlotStyle, ...additionalStyling }}>
      <div style={emptyContainerStyle}>
        {lastDroppedItem !== null ? (
          <Dashlet
            key={`dashlet${index}`}
            index={index}
            data={lastDroppedItem}
            name={lastDroppedItem.title}
            type="dashlet"
            isDropped={isDropped(lastDroppedItem.title)}
            isOver={isOver}
          />
        ) : null}
      </div>
    </div>
  );
};

export default DropTarget(
  props => props.accepts,
  {
    drop(props, monitor) {
      props.onDrop(monitor.getItem());
    }
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  })
)(EmptySlot);
