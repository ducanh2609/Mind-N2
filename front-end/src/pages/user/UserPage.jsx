import { useEffect, useState } from "react";
import Table from "../../components/common/Table";
import "./userpage.scss";
import Method from "./Method";
import Result from "./Result";

function UserPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    const username = localStorage.getItem("user");
    fetch(`http://localhost:4000/user/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        username: username,
      },
    }).then(async (res) => {
      const data = await res.json();
      if (data) {
        if (Array.isArray(data)) {
          setList(data);
        } else {
          setList([data]);
        }
      } else setList([]);
    });
  }, []);
  return (
    <div className="user-page">
      <Table data={list} />
      <Result />
      <Method />
    </div>
  );
}

export default UserPage;
