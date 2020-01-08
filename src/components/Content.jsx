import React, { useState, useCallback } from "react";
import EmptySlot from "./EmptySlot";
import ItemTypes from "../ItemTypes";
import AddRowButton from "./AddRowButton";

const contentList = [
  {
    accepts: [ItemTypes.DASHLET, ItemTypes.LISTITEM],
    lastDroppedItem: null
  },
  {
    accepts: [ItemTypes.DASHLET, ItemTypes.LISTITEM],
    lastDroppedItem: null
  },
  {
    accepts: [ItemTypes.DASHLET, ItemTypes.LISTITEM],
    lastDroppedItem: null
  },
  {
    accepts: [ItemTypes.DASHLET, ItemTypes.LISTITEM],
    lastDroppedItem: null
  },
  {
    accepts: [ItemTypes.DASHLET, ItemTypes.LISTITEM],
    lastDroppedItem: null
  },
  {
    accepts: [ItemTypes.DASHLET, ItemTypes.LISTITEM],
    lastDroppedItem: null
  },
  {
    accepts: [ItemTypes.DASHLET, ItemTypes.LISTITEM],
    lastDroppedItem: null
  },
  {
    accepts: [ItemTypes.DASHLET, ItemTypes.LISTITEM],
    lastDroppedItem: null
  },
  {
    accepts: [ItemTypes.DASHLET, ItemTypes.LISTITEM],
    lastDroppedItem: null
  }
];

const Content = () => {
  const [slots, setSlots] = useState(contentList);

  /*****/

  const immutablySwapItems = (firstIndex, secondIndex) => {
    const results = slots.slice();
    const firstItem = slots[firstIndex];
    results[firstIndex] = slots[secondIndex];
    results[secondIndex] = firstItem;

    return results;
  };

  const handleDrop = (index, item) => {
    const { id, name, oldIndex, type } = item;

    if (index !== oldIndex) {
      if (type === "listitem") {
        slots[index].lastDroppedItem = item;
        setSlots([...slots]);
        return;
      }

      setSlots(immutablySwapItems(index, oldIndex));
    }
  };

  const addRow = () => {
    const newRow = [
      {
        accepts: [ItemTypes.DASHLET, ItemTypes.LISTITEM],
        lastDroppedItem: null
      },
      {
        accepts: [ItemTypes.DASHLET, ItemTypes.LISTITEM],
        lastDroppedItem: null
      },
      {
        accepts: [ItemTypes.DASHLET, ItemTypes.LISTITEM],
        lastDroppedItem: null
      }
    ];

    setSlots([...slots, ...newRow]);
  };

  const checkEmpties = () => {
    return slots.filter(slot => slot.lastDroppedItem === null); //slots.map(slot => slot.lastDroppedItem === null)
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", width: "803px" }}
      >
        <div style={{ width: "90%" }}>
          <div>
            {slots.map((slot, index) => (
              <EmptySlot
                key={`empty${index}`}
                index={index}
                accepts={slot.accepts}
                lastDroppedItem={slot.lastDroppedItem}
                onDrop={item => handleDrop(index, item)}
                isDropped={() => null}
              />
            ))}
          </div>
          <div>
            {checkEmpties().length === 0 ? (
              <AddRowButton addrow={() => addRow} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
