import { useState } from "react";
import "./register-login.scss";

export default function Register() {
  const [confirmErr, setConfirmErr] = useState({});
  function Submit(e) {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value,
      confirmPassword: e.target.confirmPassword.value,
    };
    if (data.password === data.confirmPassword) {
      setConfirmErr({});
      fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(async (res) => {
        const message = await res.json();
        console.log(message.message);
        if (message.message === "Creat successfully")
          window.location.href = "/login";
      });
    } else {
      setConfirmErr({ display: "block" });
    }
  }
  return (
    <div className="register-login-form">
      <h1>Register</h1>
      <form onSubmit={Submit}>
        <div>
          <label htmlFor="username">Username</label>
          <input name="username" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" />
          <p style={confirmErr} className="confirm-err">
            confirm password incorrect!
          </p>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
