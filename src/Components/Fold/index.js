import React from "react";
import "./index.css";

export default class Fold extends React.Component {
  render() {
    return (
      <div className="fold_container">
        <div className="box">
          <p className="head">Juniors make IT work.</p>
          <p className="sub_head">
            Hire and invest in highly skilled juniors now.
          </p>
          <button>Post Offer Now</button>
        </div>
      </div>
    );
  }
}
