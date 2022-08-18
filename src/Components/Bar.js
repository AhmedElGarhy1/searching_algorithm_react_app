import React from "react";

const Bar = ({ height, width }) => {
  return (
    <div
      data-height={height}
      style={{ height: `${height}%`, width }}
      className="bar"
      aria-label={height}
    ></div>
  );
};

export default Bar;
