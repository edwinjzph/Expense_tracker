import React from "react";

function Expenseform({ setOpenform }) {
  return (
    <div id="myForm" className="input-div">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <h3>Add Expense</h3>
        <i
          style={{ fontSize: 23, cursor: "pointer" }}
          className="fa-solid fa-xmark"
          onClick={() => {
            setOpenform(false);
          }}
        />
      </div>
      <input type="text" placeholder="Expense Name" />
      <input type="text" placeholder="Date of Expense" />
      <input type="text" placeholder="Expense Amount" />
      <button
        style={{
          padding: "8px 10px 8px 10px",
          border: "none",
          backgroundColor: "rgb(217, 0, 255)",
          color: "white",
          borderRadius: 10,
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Expenseform;
