import "./register-login.scss";

export default function Login() {
  function Submit(e) {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (res) => {
      const message = await res.json();
      console.log(message);
      localStorage.setItem("token", message.token);
      if (message) window.location.href = "/user";
    });
  }
  return (
    <div className="register-login-form">
      <h1>Login</h1>
      <form onSubmit={Submit}>
        <div>
          <label htmlFor="username">Username</label>
          <input name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
