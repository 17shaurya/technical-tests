import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "10%",
        backgroundColor: "white",
        justifyContent: "end",
      }}
    >
      <Link to="/checkbox" style={{ color: "red", margin: 10 }}>
        CheckBox Screen
      </Link>

      <Link to="/seachring" style={{ color: "blue", margin: 10 }}>
        Searching Screen
      </Link>
      <Link to="/" style={{ color: "blue", margin: 10 }}>
        Home
      </Link>
    </div>
  );
}
