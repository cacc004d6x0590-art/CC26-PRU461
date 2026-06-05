import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";

export default function PasswordField() {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
    return;
  }
  return (
    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium text-slate-700 mb-2"
      >
        Password
      </label>
      <div className="relative">
        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          name="password"
          className="w-full pl-12 pr-12 py-3.5 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
          placeholder="Minimal 8 karakter"
        //   required
        />
        <button
          type="button"
          onClick={handleShowPassword}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </button>
      </div>
    </div>
  );
}
