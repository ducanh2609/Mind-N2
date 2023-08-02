import { useSelector } from "react-redux";
import "./profile.scss";
import { getUser } from "../../store-toolkit/redux/selector";

export default function Profile() {
  // const user = useSelector((state) => state.user);
  const user = useSelector(getUser).user;
  console.log("user", user);
  return (
    <div className="profile">
      <p>
        <span className="title">Username:</span> <span>{user.username}</span>
      </p>
      <p>
        <span className="title">Email:</span> <span>{user.email}</span>
      </p>
      <p>
        <span className="title">Role:</span> [
        <span>{user.role?.join(", ")}</span>]
      </p>
    </div>
  );
}
