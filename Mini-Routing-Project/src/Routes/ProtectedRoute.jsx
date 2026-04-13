import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute() {

    const { isAuthenticated, isLoading } = useAuth()
    const location = useLocation()

    if (isLoading) {
        return (
            <h1>Loading</h1>
        )
    }

    if (!isAuthenticated) {
        return (
            <Navigate

                to='/login'

                state= {{ from: location.pathname }}

                replace
            />
        )
    }

    return <Outlet />
}