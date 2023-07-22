import { useAuth } from "hooks/useAuth";
import { HeaderNav, NavigationLink } from "./Navigation.styled";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return (
        <HeaderNav>
            <NavigationLink to="/">
                Home
            </NavigationLink>
            {isLoggedIn && (
            <NavigationLink to="/contacts">
                Contacts
                </NavigationLink>
            )}
        </HeaderNav>
    )

}