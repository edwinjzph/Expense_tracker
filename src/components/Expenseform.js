import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function Expenseform({ setOpenform, setExpense }) {
  const [expensedata, setExpensedata] = useState({
    expenseName: "",
    date: "",
    amount: 0,
    description: "",
    currency: "",
  });

  const handleChanage = (e) => {
    setExpensedata((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    setExpense((prevState) => {
      return [...prevState, { ...expensedata, id: uuidv4() }];
    });
  };

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
      <input
        type="text"
        placeholder="Expense Name"
        name="expenseName"
        onChange={handleChanage}
        value={expensedata.expenseName}
      />
      <input
        type="date"
        placeholder="Date of Expense"
        name="date"
        onChange={handleChanage}
        value={expensedata.date}
      />
      <input
        type="textarea"
        placeholder="Description"
        name="description"
        onChange={handleChanage}
        value={expensedata.description}
      />
      <div style={{ display: "flex", gap: "7px", width: "98%" }}>
        <input
          type="text"
          placeholder="Currency"
          name="currency"
          style={{ flexBasis: "20%" }}
          onChange={handleChanage}
          value={expensedata.currency}
        />
        <input
          type="number"
          placeholder="Expense Amount"
          name="amount"
          onChange={handleChanage}
          value={expensedata.amount}
        />
      </div>

      <button
        onClick={() => {
          setOpenform(false);
          handleSubmit();
        }}
        style={{
          padding: "13px 10px 13px 10px",
          border: "none",
          cursor: "pointer",
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
