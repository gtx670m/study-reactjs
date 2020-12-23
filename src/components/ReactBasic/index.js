import React from "react";
import "./styles.scss";

const ReactBasic = props => {
  const A = 100 + 100 + '100' - 100; // 200000
  const B = 100 + '100' - '100' + '100'; // 100000100
  const C = 100 + (100 + '200') - '300'; // '100100200' - 300 = 100099000
  const D = 100 + 200 - '300subs'; // NaN
  return (
    <div className="ReactBasic">
      <h1>Addition & Subtraction</h1>
      <div> - Number + String = String + String = String</div>
      <div> - Number - NumberString = Number - Number = Number</div>
      <div>Example:</div>
      <div>{`const A = 100 + 100 + '100' - 100 = ${A} (${typeof A})`}</div>
      <div>{`const B = 100 + '100' - '100' + '100' = ${B} (${typeof B})`}</div>
      <div>{`const C = 100 + (100 + '200') - '300' = ${C} (${typeof C})`}</div>
      <div>{`const D = 100 + 200 - '300subs' = ${D} (${typeof D})`}</div>
      <h1>reduce()</h1>
      <h1>Tham trị (value type) & tham chiếu (reference type)</h1>
      
    </div>
  )
}

export default ReactBasic;