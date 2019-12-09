import React, { useState, useCallback } from "react";
import EmptySlot from "./EmptySlot";
import Dashlet from "./Dashlet";
import ItemTypes from "../ItemTypes";

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
  }
];

const Content = () => {
  const [slots, setSlots] = useState(contentList);
  const [droppedBoxNames, setDroppedBoxNames] = useState([]);

  /*****/
  function isDropped(boxName) {
    //console.log(boxName);
    return droppedBoxNames.indexOf(boxName) > -1;
  }

  const handleDrop = (index, item) => {
    const { id, name, oldIndex, type } = item;

    if (index !== oldIndex) {
      if (type === "dashlet") {
        slots[index].lastDroppedItem = slots[oldIndex].lastDroppedItem;
        slots[oldIndex].lastDroppedItem = null;
      } else if (type === "listitem") {
        slots[index].lastDroppedItem = item;
      }
      setSlots([...slots]);
    }

    console.log(item);
  };

  /*
  const handleDrop = useCallback(
    //console.log("handleDrop")
    (index, item) => {
      const { id, name, oldIndex } = item;
      setSlots();

      //update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
      setSlots(
        update(slots, {
          [index]: {
            lastDroppedItem: {
              $set: item
            }
          }
        })
      );
    },
    [droppedBoxNames, slots]
  );*/

  /*****/

  return (
    <div>
      {slots.map((slot, index) => (
        <EmptySlot
          key={`empty${index}`}
          index={index}
          accepts={slot.accepts}
          lastDroppedItem={slot.lastDroppedItem}
          onDrop={item => handleDrop(index, item)}
          isDropped={() => isDropped(slot.lastDroppedItem.title)}
        />
      ))}
    </div>
  );
};

export default Content;
/* {slots.map((slot, index) =>
        slot.lastDroppedItem === null ? (
          <EmptySlot
            key={`empty${index}`}
            accepts={slot.accepts}
            lastDroppedItem={slot.lastDroppedItem}
            onDrop={item => handleDrop(index, item)}
          />
        ) : (
          <Dashlet
            key={`dashlet${index}`}
            index={index}
            data={slot.lastDroppedItem}
            name={slot.lastDroppedItem.title}
            type="dashlet"
            isDropped={isDropped(slot.lastDroppedItem.title)}
          />
        )
      )}*/
