import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth";
import { HeaderContainer } from "./AppBar.styled";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <HeaderContainer>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </HeaderContainer>
    )
}