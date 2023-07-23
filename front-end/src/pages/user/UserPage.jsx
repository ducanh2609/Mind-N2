import { useEffect, useState } from "react";
import Table from "../../components/common/Table";
import "./userpage.scss";

function UserPage() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    fetch(`http://localhost:4000/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(async (res) => {
      const data = await res.json();
      if (data) setList([data]);
    });
  }, []);
  return (
    <div className="user-page">
      <Table data={list} />
    </div>
  );
}

export default UserPage;
