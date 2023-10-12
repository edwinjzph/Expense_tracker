import React from "react";
import ExpenseCard from "../components/ExpenseCard";

function ExpenseLayout({ sampledata, setExpense }) {
  return (
    <div className="card-row">
      {sampledata &&
        sampledata
          .slice(0)
          .reverse()
          .map((value, index) => {
            return (
              <ExpenseCard
                data={value}
                key={index}
                setExpense={setExpense}
                sampledata={sampledata}
                index={index}
              />
            );
          })}
    </div>
  );
}

export default ExpenseLayout;
