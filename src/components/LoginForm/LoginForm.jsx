import { useDispatch } from "react-redux"
import { LabelForm, LogForm } from "./LoginForm.styled";
import { logIn } from "redux/auth/operations";

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
        <input type="email" name="email" />
            </LabelForm>
            <LabelForm htmlFor="">
                Password
            <input type="password" name="password" />
            </LabelForm>
            <button type="submit">Log In</button>
            </LogForm>
    )
}