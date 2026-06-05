import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import UserPage from "../layouts/UserPage";
import UserTestPage from "../pages/user/UserTestPage";
import UserResultPage from "../pages/user/UserResultPage";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth">
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="/user" element={<UserPage />}>
        <Route path="test" element={<UserTestPage />} />
        <Route path="result" element={<UserResultPage />} />
      </Route>
    </Routes>
  );
}
