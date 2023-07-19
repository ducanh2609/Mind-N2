import { useEffect } from "react";
import Table from "../common/Table";
import "./userpage.scss";

function UserPage() {
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch("http://localhost:4000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }, [token]);
  const list = [
    { id: "1", username: "a", email: "abc0", role: [] },
    { id: "2", username: "b", email: "abc0", role: ["admin", "user"] },
  ];
  return (
    <div className="user-page">
      <Table data={list} />
    </div>
  );
}

export default UserPage;
