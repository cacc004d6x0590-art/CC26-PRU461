import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserPage from "../layouts/UserPage";
import UserTestPage from "../pages/user/UserTestPage";
import UserResultPage from "../pages/user/UserResultPage";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<UserPage />}>
        <Route path="test" element={<UserTestPage />} />
        <Route path="result" element={<UserResultPage />} />
      </Route>
    </Routes>
  );
}
