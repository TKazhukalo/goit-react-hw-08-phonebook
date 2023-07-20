import {useAuth} from '../../hooks/useAuth';
import { ContainerMenu } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    return (
        <ContainerMenu>
            <p>Welcome, {user.name}</p>
            <button type="button" onClick={()=>dispatch(logOut())} >Logout</button>
        </ContainerMenu>
    )
}