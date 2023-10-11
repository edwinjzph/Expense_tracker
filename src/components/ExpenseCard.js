import React from "react";
import moment from "moment";
function ExpenseCard({ data, id }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + ".." : string;
  }

  return (
    <div
      className="card_main"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="card" id={id}>
        <div className="card_sub">
          <div className="cate-cardicon  icon6">
            <i className="fa-solid fa-mug-hot" />
          </div>
          <div>
            <h3>{truncate(data?.expenseName, 16)}</h3>
            <h6 style={{ color: "gray" }}>
              {moment(data?.date, "DDMMYY").fromNow()}
            </h6>
            <h6 style={{ color: "gray" }}>
              {moment(data?.date, "DDMMYY").format().slice(0, 10)}
            </h6>
          </div>
        </div>
        <div className="card_sub2">
          <h3>{data?.amount}</h3>
          <i className="fa-solid fa-trash" />
        </div>
      </div>
      <h6>{data?.description}</h6>
    </div>
  );
}

export default ExpenseCard;
