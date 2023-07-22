import { HeaderNav, NavigationLink } from "components/Navigation/Navigation.styled";

export const AuthNav = () => {
    return (
        <HeaderNav>
            <NavigationLink to="/register">
                Register
            </NavigationLink>
            <NavigationLink to="/login">
                Log In
            </NavigationLink>
        </HeaderNav>
    )
}