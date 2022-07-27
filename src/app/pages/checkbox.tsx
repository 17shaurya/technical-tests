import React, { useState } from "react";
import { bikes } from "../constants/staticdata";
import Header from "../components/header";
export default function Checkbox() {
  const [isAllChecked, setAllCheck] = useState(false);
  const [checked_values, setChecked] = useState<any[]>([]);

  //Select/UnSelectAll
  const handleSelectAll = () => {
    setAllCheck(!isAllChecked);
    const arr = bikes.map((bike: any) => {
      return bike.id;
    });
    setChecked(arr);
    if (isAllChecked) {
      setChecked([]);
    }
  };

  //single select/unselect
  const handleClick = (e: any) => {
    const { id, checked } = e.target;
    let finalarr = [];
    let arr = [...checked_values, ...id];
    arr = arr.filter((value, index) => arr.indexOf(value) === index);
    setChecked(arr);
    if (!checked) {
      finalarr = checked_values.filter((item: any) => item !== id.toString());
      setChecked(finalarr);
      if (isAllChecked) {
        setAllCheck(false);
      }
      if (bikes.length !== finalarr.length) {
        setAllCheck(false);
      }
    }
    if (checked) {
      if (bikes.length === arr.length) {
        setAllCheck(true);
      }
    }
  };

  return (
    <div
      className="header"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Header />
      <div>
        <input
          id={"selectAll"}
          name={"Select All"}
          type="checkbox"
          onChange={() => handleSelectAll()}
          checked={isAllChecked}
        />
        <label>Select All</label>
      </div>
      {/* checkbox listingstart */}
      {bikes.map((item: any) => {
        return (
          <div key={item.id}>
            <input
              id={item.id}
              name={item.name}
              type="checkbox"
              onChange={handleClick}
              checked={checked_values.includes(item.id.toString())}
            />
            <label>{item.name}</label>
          </div>
        );
      })}
      {/* checkbox listing end */}
    </div>
  );
}
