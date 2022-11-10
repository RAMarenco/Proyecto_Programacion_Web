import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    const user = { loggedIn: true, role: "Client"};
    return user;
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth.loggedIn ? <Outlet/> : <Navigate to="/Login"/> ;
}

export {ProtectedRoutes, useAuth}

