import React from "react";
import "./FeatureBox.css";

export default function FeatureBox(props) {
  return (
    <>
      <section className="box-feature">
        <h3>{props.title}</h3>
        <section className="box-range">
            <span>{props.rate}</span>
            <span>{props.sub}</span>
            <span>{props.icon}</span>
        </section>
        <p>Compared to last month</p>
      </section>
    </>
  );
}
