import React from "react";
import ExpenseCard from "../components/ExpenseCard";

function ExpenseLayout({ sampledata }) {
  console.log(sampledata);

  return (
    <div className="card-row">
      <h5 style={{ color: "gray" }}>Today</h5>
      {sampledata &&
        sampledata.map((value, index) => {
          return <ExpenseCard data={value} key={index} />;
        })}
    </div>
  );
}

export default ExpenseLayout;
