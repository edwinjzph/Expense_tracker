import React from "react";
import moment from "moment";

function ExpenseCard({ data, id, setExpense, sampledata, index }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + ".." : string;
  }
  function removeObjectWithId(arr, id) {
    return arr.filter((obj) => obj.id !== id);
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
            <h6 style={{ color: "gray" }}>{moment(data?.date).fromNow()}</h6>
            <h6 style={{ color: "gray" }}>
              {moment(data?.date).format("YYYY-MM-DD")}
            </h6>
          </div>
        </div>
        <div className="card_sub2">
          <h3>{data?.amount}</h3>
          <i
            className="fa-solid fa-trash"
            onClick={() => {
              setExpense(removeObjectWithId(sampledata, data?.id));
            }}
          />
        </div>
      </div>
      <h6>{data?.description}</h6>
    </div>
  );
}

export default ExpenseCard;
