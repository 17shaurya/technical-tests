import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
export default function HomeScreen() {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <button>
        <Link to="checkbox">CheckBox Screen</Link>
      </button>
      <button>
        <Link to="seachring">Searching Screen</Link>
      </button>
    </div>
  );
}
