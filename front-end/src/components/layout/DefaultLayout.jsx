import { Outlet, Link } from "react-router-dom";
import "./default-layout.scss";
import { useEffect, useState } from "react";
export default function DefaultLayout() {
  const [login, setLogin] = useState(0);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setLogin(1);
    else setLogin(0);
  }, []);
  function logout() {
    localStorage.removeItem("token");
    setLogin(0);
  }
  return (
    <>
      <nav>
        <Link to="/">Hompage</Link>
        {login === 0 ? (
          <div>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        ) : (
          <div>
            <Link to="/user">User</Link>
            <Link onClick={logout}>Logout</Link>
          </div>
        )}
      </nav>
      <div className="main">
        <Outlet />
      </div>
    </>
  );
}
