import React, { useState } from "react";
import Header from "../components/header";
import { users } from "../setup/apis";
import DataTable from "react-data-table-component";

export default function Searching() {
  //ListColumns
  const columns = [
    {
      name: "Serial No.",
      selector: (row: any, index: any) => index + 1,
      sortable: true,
    },
    {
      name: "Login ID",
      selector: (row: any) => row.login,
      sortable: true,
    },
    {
      name: "Avatar",
      selector: (row: any) => (
        <img
          style={{ width: 30, height: 30 }}
          src={row.avatar_url}
          alt={row.id}
        />
      ),
      sortable: true,
    },
    {
      name: "User Type",
      selector: (row: any) => row.type,
      sortable: true,
    },
  ];

  const [list, setuser_list] = useState([]);

  //fet users from API
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

      <div className="table-responsive" style={{ width: "100%" }}>
        {/* begin::Table */}
        <DataTable title="Users" columns={columns} data={list} pagination />
        {/* end::Table */}
      </div>
    </div>
  );
}
