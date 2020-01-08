import React, { useEffect, useState, memo } from "react";
import Box from "./Box";
const styles = {
  display: "flex",
  justifyContent: "center",
  width: "200px",
  height: "200px",
  background: "whitesmoke",
  padding: "3px",
  borderRadius: "3px",
  boxShadow: "0 2px 3px 3px rgba(0,0,0,0.2)"
};
const BoxDragPreview = memo(({ title }) => {
  return <div style={styles}>{title}</div>;
});
//<Box title={title} />
export default BoxDragPreview;
