import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";

const Sidebar = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setList(json));

    return () => {};
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {list.map((item, index) => (
        <ListItem
          key={index}
          data={item}
          index={index}
          name={item.id}
          type="listitem"
          isDropped={() => console.log("test")}
        />
      ))}
    </div>
  );
};

export default Sidebar;
