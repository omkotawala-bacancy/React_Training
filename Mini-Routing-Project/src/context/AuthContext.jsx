import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    function login(data){
        setUser(data)
    }

    function logout(){
        setUser(null)
    }

    function loginHandler(name, role){
        setUser({
            name: name,
            role: role
        })
    }

    const value = {login, logout, user, loginHandler}

    return (
        <AuthContext.Provider 
            value = {value}
        >
            {children}
        </AuthContext.Provider>
    )
}