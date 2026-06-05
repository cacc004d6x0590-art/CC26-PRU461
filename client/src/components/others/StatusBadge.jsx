export default function StatusBadge({ label }) {
  return (
    <span
      className={`px-3 py-1 rounded-lg text-xs font-medium ${
        label === "Selesai"
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {label}
    </span>
  );
}
