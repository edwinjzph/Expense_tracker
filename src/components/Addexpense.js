import React from "react";

function Addexpense({ setOpenform }) {
  return (
    <div
      className="plus"
      onClick={() => {
        setOpenform(true);
      }}
      style={{
        width: 40,
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        padding: 10,
        borderRadius: "50%",
      }}
    >
      <i style={{ color: "white" }} className="fa-solid fa-plus" />
    </div>
  );
}

export default Addexpense;
