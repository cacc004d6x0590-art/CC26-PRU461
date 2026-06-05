import AuthPage from "../../layouts/AuthPage";
import InputField from "../../components/forms/InputField";
import Button from "../../components/buttons/Button";
import Form from "../../components/forms/Form";
import { Mail } from "lucide-react";
import AuthOptions from "../../components/forms/auth/AuthOptions";
import AuthRedirect from "../../components/forms/auth/AuthRedirect";
import PasswordField from "../../components/forms/PasswordField";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  function handleRedirect(page) {
    if (page === "user") {
      navigate("/user/dashboard");
    } else {
      navigate("/admin/dashboard");
    }
  }
  return (
    <AuthPage page="login">
      <Form>
        <InputField
          htmlFor="email"
          label="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Masukkan email terdaftar"
          icon={Mail}
        />

        <PasswordField />

        <AuthOptions />

        <Button onClick={() => handleRedirect("user")} type="button">
          Masuk ke User/Siswa
        </Button>
        <Button onClick={() => handleRedirect("admin")} type="button">
          Masuk ke Admin
        </Button>
      </Form>
      <AuthRedirect to="register" />
    </AuthPage>
  );
}
