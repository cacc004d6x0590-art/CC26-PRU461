export default function Button({ type, children, onClick, size = "w-full" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer ${size} flex gap-1.5 items-center justify-center py-3.5 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all`}
    >
      {children}
    </button>
  );
}
