import React, { useState } from "react";
import Header from "../components/header";
import { users } from "../setup/apis";

export default function Searching() {
  const [list, setuser_list] = useState([]);
  const getUsers = async (name: any) => {
    let usersData = await users(name);

    setuser_list(usersData?.items);
  };

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
      <input
        type="text"
        placeholder="Search Users by name"
        onChange={(e) => getUsers(e.target.value)}
      />

      {list.length > 0 &&
        // eslint-disable-next-line array-callback-return
        list.map((user: any) => {
          return <h4>{user.login}</h4>;
        })}

      {!list.length && <div>No Data found</div>}
    </div>
  );
}
