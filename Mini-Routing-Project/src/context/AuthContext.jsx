import { createContext, useState } from "react";

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setAuthentic] = useState(false)
    const [isLoading, setLoading] = useState(false)

    function login(data) {
        setUser(data)
    }

    const timer = () => {
        setTimeout(() => {
            setLoading(false)
            setAuthentic(true)
        }, 2000)
    }

    function logout() {
        setUser(null)
    }

    function loginHandler(name, role) {
        setUser({
            name: name,
            role: role
        })
        setLoading(true)
        timer()
    }

    const value = { login, logout, user, loginHandler, isAuthenticated, isLoading }

    return (
        <AuthContext.Provider
            value={value}
        >
            {children}
        </AuthContext.Provider>
    )
}