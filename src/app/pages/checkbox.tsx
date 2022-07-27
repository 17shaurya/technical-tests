import React, { useState } from "react";
import { bikes } from "../constants/staticdata";
import Header from "../components/header";
export default function Checkbox() {
  const [isAllChecked, setAllCheck] = useState(false);
  const [checked_values, setChecked] = useState<any[]>([]);
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

  const handleClick = (e: any) => {
    const { id, checked } = e.target;
    const arr = [...checked_values, ...id];
    setChecked(arr);
    if (!checked) {
      setChecked(checked_values.filter((item: any) => item !== id.toString()));
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
    </div>
  );
}
