import { Layout } from "../Layout";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from "../../redux/auth/operations";
import { RestrictedRoute } from "../../RestrictedRoute";
import { PrivateRoute } from "PrivateRoute";

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);
    return isRefreshing ? (
         <b>Refreshing user data...</b>
  ) : (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                    <Route path="/register" element={
                        <RestrictedRoute component={RegisterPage} redirectTo="/contacts">
                            </RestrictedRoute>
                    }
                    />
                    <Route path="/login" element={
                        <RestrictedRoute component={LoginPage} redirectTo="/contacts">
                             </RestrictedRoute>
                    }
                    />
                    <Route path="/contacts" element={
                        <PrivateRoute component={ContactsPage} redirectTo="/login" />
                    }
                    />    
            </Route>
      
        </Routes>
    )
}