import React from "react";

const Iframe = props => {
  console.log("pöö");
  return (
    <div>
      <iframe src={props.url} height="64px" width="64px" title={props.url} />
    </div>
  );
};

export default Iframe;
