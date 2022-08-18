import React from "react";
import Bar from "./Bar";

const Bars = ({ steps, array }) => {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>
        Number of Steps
        <br /> {steps}
      </h3>
      <div className="bars" id="bars">
        {array.map((e) => (
          <Bar key={e} height={e} width={800 / array.length} />
        ))}
      </div>
    </>
  );
};

export default Bars;
