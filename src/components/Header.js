import React from "react";
import img from "../assets/images.jpg";

export default function Header() {
  return (
    <div className="nav">
      <div
        className="dasd_sub"
        style={{ display: "flex", alignItems: "center", gap: 15 }}
      >
        <i style={{ fontSize: 20 }} className="fa-solid fa-bars" />
        <h2>Expense Tracker</h2>
      </div>
      <div
        className="dasd_sub"
        style={{ display: "flex", alignItems: "center", gap: 10 }}
      >
        <img src={img} alt="icon" style={{ height: 45, borderRadius: "50%" }} />
      </div>
    </div>
  );
}
