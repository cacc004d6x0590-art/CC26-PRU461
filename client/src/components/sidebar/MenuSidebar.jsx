import { NavLink } from "react-router-dom";

export default function MenuSidebar({ menuItems }) {
  return (
    <nav className="flex-1 p-4 space-y-2">
      {menuItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              isActive
                ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                : "text-slate-600 hover:bg-slate-100"
            }`
          }
        >
          <item.icon className="w-5 h-5" />
          <span className="font-medium">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
