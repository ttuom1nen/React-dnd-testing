import React from "react";
import { DropTarget } from "react-dnd";
import Dashlet from "./Dashlet";

const emptySlotStyle = {
  display: "inline-block",
  position: "relative",
  height: "220px",
  width: "220px",
  border: "1px solid silver",
  margin: "10px"
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
  let backgroundColor = "whitesmoke";
  if (isActive) {
    backgroundColor = "silver";
  } else if (canDrop) {
    backgroundColor = "whitesmoke";
  }

  return connectDropTarget(
    <div style={{ ...emptySlotStyle, backgroundColor }}>
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

        {/*isActive
        ? "Release to drop"
      : `This dustbin accepts: ${accepts.join(", ")}`*/}

        {/*lastDroppedItem && (
        <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
      )*/}
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
