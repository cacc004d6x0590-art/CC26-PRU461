export default function Form({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {children}
    </form>
  );
}
