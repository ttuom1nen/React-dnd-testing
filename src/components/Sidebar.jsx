import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/actions/fetchAction";

const Sidebar = () => {
  const dispatch = useDispatch();
  dispatch(fetchUsers());
  const list = useSelector(state => state.list);

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
