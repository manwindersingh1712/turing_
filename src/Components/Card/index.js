import React from "react";
import "./index.css";

export default function Card({ heading, time, country, state, data }) {
  return (
    <div className="card">
      <div className="card_top">
        <strong>
          <div className="head">{heading}</div>
        </strong>

        <div className="time">{time}</div>
      </div>
      <div className="middle">
        <div style={{ marginRight: "21px" }}>{country}</div>
        <div style={{ opacity: "0.6" }}>{state}</div>
      </div>
      <div className="end">{data}</div>
      <button>
        <i className="fas fa-greater-than"></i>
      </button>
    </div>
  );
}
