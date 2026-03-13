import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

function withAuth(WrappedComponent){

    return function AuthProtected(props){

        const isAuthenticated = useAuth()

        if(!isAuthenticated){
            <Navigate 
                to = '/login'
                replace
            />
        }

        return <WrappedComponent {...props}/>
    }
}

export default withAuth;