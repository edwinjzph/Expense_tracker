import React from "react";

function Categories({ totalexpense }) {
  return (
    <>
      <div className="main-balance">
        <div>
          <h2>Total Expense</h2>
        </div>
        <div>
          <h1>${totalexpense}</h1>
        </div>
      </div>
      <div className="cate">
        <div className="cate-card">
          <div className="cate-cardicon">
            <i className="fa-solid fa-cart-shopping" />
          </div>
          <div className="cate-title">
            <h5>Shopping</h5>
          </div>
        </div>
        <div className="cate-card">
          <div className="cate-cardicon  icon2">
            <i className="fa-solid fa-plane" />
          </div>
          <div className="cate-title">
            <h5>Travel</h5>
          </div>
        </div>
        <div className="cate-card">
          <div className="cate-cardicon  icon3">
            <i className="fa-solid fa-film" />
          </div>
          <div className="cate-title">
            <h5>Entertainment</h5>
          </div>
        </div>
        <div className="cate-card">
          <div className="cate-cardicon  icon4">
            <i className="fa-solid fa-notes-medical" />
          </div>
          <div className="cate-title">
            <h5>Medical</h5>
          </div>
        </div>
        <div className="cate-card">
          <div className="cate-cardicon  icon5">
            <i className="fa-solid fa-bowl-food" />
          </div>
          <div className="cate-title">
            <h5>Food</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
