import moment from "moment";
import React from "react";

function Expenseday({ maxday }) {
  return (
    <div style={{ width: "100%" }}>
      <div className="expense_card">
        <h5>
          {`Uncover the most popular date for purchases, with a total spend of ${moment(
            parseInt(maxday?.dateWithMaxAmount)
          ).format("YYYY-DD-MM")} on $${maxday?.maxAmount}.`}
        </h5>
        <h5
          style={{ color: "white", marginTop: "4px", opacity: ".7" }}
        >{`Analyse now >`}</h5>
      </div>
      <div className="expenses">
        <div>
          <h3>All Expenses</h3>
        </div>
        <button>View all</button>
      </div>
    </div>
  );
}

export default Expenseday;
