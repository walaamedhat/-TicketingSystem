import React from "react";

const SuspenseFallback = ({ from }) => (
  <div style={{ position: from ? "" : "fixed", top: from ? "0" : "40%", left: from ? "0" : "50%" }}>
      <h1 style={{ color: "blue" }}>....Loading</h1>
  </div>
);

export default SuspenseFallback;
