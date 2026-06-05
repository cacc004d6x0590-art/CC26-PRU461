import { Link } from "react-router-dom";

export default function AuthOptions() {
  return (
    <div className="flex items-center justify-between text-sm">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-slate-600">Ingat saya</span>
      </label>
      <Link to="#" className="text-blue-600 hover:text-blue-700 font-medium">
        Lupa password?
      </Link>
    </div>
  );
}
