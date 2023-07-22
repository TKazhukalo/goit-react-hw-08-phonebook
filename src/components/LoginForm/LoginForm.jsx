import { useDispatch } from "react-redux"
import { LabelForm, LogForm, LoginInput } from "./LoginForm.styled";
import { logIn } from "redux/auth/operations";
import { ButtonMenu } from "components/UserMenu/UserMenu.styled";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <LogForm onSubmit={handleSubmit} autoComplete="off">
        <LabelForm htmlFor="">Email 
        <LoginInput type="email" name="email" placeholder="Введіть e-mail" />
        </LabelForm>
        <LabelForm htmlFor="">
                Password
        <LoginInput type="password" name="password" placeholder="Введіть пароль" />
        </LabelForm>
        <ButtonMenu type="submit">Log In</ButtonMenu>
        </LogForm>
    )
}