export default function InputField({
  htmlFor,
  label,
  type = "text",
  id,
  name,
  placeholder,
  icon: Icon,
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-slate-700 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
        )}
        <input
          type={type}
          id={id}
          name={name}
          className="w-full pl-12 pr-4 py-3.5 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
