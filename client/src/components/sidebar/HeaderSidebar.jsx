import { Sparkles, X } from "lucide-react";

export default function HeaderSidebar({ onClose, userName, userRole }) {
  return (
    <>
      <div className="flex items-center justify-between p-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-lg font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            JurusanKu AI
          </span>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden text-slate-600 hover:text-slate-800"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Profile */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
            AS
          </div>
          <div>
            <div className="font-semibold text-slate-800">{userName}</div>
            <div className="text-sm text-slate-600">{userRole}</div>
          </div>
        </div>
      </div>
    </>
  );
}
