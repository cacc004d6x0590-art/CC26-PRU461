import HeaderSidebar from "./HeaderSidebar";
import FooterSidebar from "./FooterSidebar";
import MenuSidebar from "./MenuSidebar";

export default function Sidebar({ menuItems, isOpen, onClose, userName, userRole }) {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen w-72 bg-white border-r border-slate-200 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="flex flex-col h-full">
        <HeaderSidebar onClose={onClose} userName={userName} userRole={userRole}/>

        <MenuSidebar menuItems={menuItems} />

        <FooterSidebar />
      </div>
    </aside>
  );
}
