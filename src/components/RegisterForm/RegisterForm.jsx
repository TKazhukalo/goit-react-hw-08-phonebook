import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { RegisterForms, RegisterLabel } from "./RegisterForm.styled";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterForms  onSubmit={handleSubmit} autoComplete="off">
      <RegisterLabel>
        Username
              <input
                  type="text"
                  name="name"
                  placeholder="Введіть ім'я"
              />
      </RegisterLabel>
      <RegisterLabel>
        Email
              <input
                  type="email"
                  name="email"
                  placeholder="Введіть e-mail"
              />
      </RegisterLabel>
      <RegisterLabel>
        Password
              <input
                  type="password"
                  name="password"
                  placeholder="Введіть пароль"
              />
      </RegisterLabel>
      <button type="submit">Register</button>
    </RegisterForms>
  );
};
