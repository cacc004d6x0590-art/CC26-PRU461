import { Link } from "react-router-dom";

const REDIRECT_AUTH = [
  {
    id: "login",
    to: "/auth/login",
    text: "Sudah Punya Akun? ",
    linkText: "Masuk Sekarang",
  },
  {
    id: "register",
    to: "/auth/register",
    text: "Belum Punya Akun? ",
    linkText: "Daftar Sekarang",
  },
];

export default function AuthRedirect({ to }) {
  const redirect = REDIRECT_AUTH.find((item) => item.id === to);

  return (
    <div className="mt-6 text-center">
      <p className="text-slate-600">
        {redirect?.text}
        <Link
          to={redirect?.to}
          className="text-blue-600 hover:text-blue-700 font-semibold"
        >
          {redirect?.linkText}
        </Link>
      </p>
    </div>
  );
}
