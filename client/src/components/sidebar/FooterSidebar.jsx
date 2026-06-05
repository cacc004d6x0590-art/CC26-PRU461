import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FooterSidebar() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("major_recommendation_test");
    sessionStorage.removeItem("test_result");
    navigate("/auth/login");
  };

  return (
    <div className="p-4 border-t border-slate-200">
      <button
        type="button"
        onClick={handleSignOut}
        className="flex w-full items-center gap-3 px-4 py-3 text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all text-left"
      >
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Keluar</span>
      </button>
    </div>
  );
}
