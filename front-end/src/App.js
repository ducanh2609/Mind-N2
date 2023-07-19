import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import DefaultLayout from "./components/layout/DefaultLayout";
import Register from "./components/home/Regisrer";
import Login from "./components/home/Login";
import NoPage from "./components/home/NoPage";
import UserPage from "./components/user-manager/UserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<UserPage />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
