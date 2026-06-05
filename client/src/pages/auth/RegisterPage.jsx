import AuthPage from "../../layouts/AuthPage";
import InputField from "../../components/forms/InputField";
import Button from "../../components/buttons/Button";
import Form from "../../components/forms/Form";
import { Mail, User } from "lucide-react";
import AuthRedirect from "../../components/forms/auth/AuthRedirect";
import AuthOptions from "../../components/forms/auth/AuthOptions";
import PasswordField from "../../components/forms/PasswordField";

export default function RegisterPage() {
  return (
    <AuthPage page="register">
      <Form>
        <InputField
          htmlFor="name"
          label="Nama Lengkap"
          id="name"
          name="name"
          placeholder="Masukkan nama lengkap"
          icon={User}
        />

        <InputField
          htmlFor="email"
          label="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Masukkan alamat email"
          icon={Mail}
        />

        <PasswordField />

        <AuthOptions />

        <Button type="submit">Masuk</Button>
      </Form>
      <AuthRedirect to="login" />
    </AuthPage>
  );
}
