import {useAuth} from '../../hooks/useAuth';
import { ButtonMenu, ContainerMenu, UserName } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    return (
        <ContainerMenu>
            <UserName>Welcome, {user.name}</UserName>
            <ButtonMenu type="button" onClick={() => dispatch(logOut())} >Logout</ButtonMenu>
        </ContainerMenu>
    );
};