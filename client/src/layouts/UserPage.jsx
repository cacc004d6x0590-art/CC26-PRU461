import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/headers/Header";

export default function UserPage() {
  const locationPage = useLocation();

  const resultPage = "/result" === locationPage.pathname;
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-linear-to-br from-slate-50 via-blue-50 to-purple-50" />
      <Header page={resultPage} />
      <main className="p-8 space-y-2 lg:w-[75%] mx-auto">{<Outlet />}</main>
    </div>
  );
}
