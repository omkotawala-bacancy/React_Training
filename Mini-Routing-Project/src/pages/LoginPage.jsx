import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";




function LoginPage(){

    const [name, setName] = useState('')
    const [role, setRole] = useState('')

    const navigate = useNavigate()
    const {loginHandler, login} = useAuth()

    const { state } = useLocation()
    const from = state?.from?.pathname ?? '/dashboard'

    return(
        <div className="flex flex-col gap-4">
            <label htmlFor="Name">Name : </label>
            <input type="text" onChange={(e) => {
                setName(e.target.value)
            }} required/>

            <label htmlFor="role">Role : </label>
            <input type="text"  onChange={(e) => {
                setRole(e.target.value)
            }}/>

            <button onClick={() => {
                loginHandler(name, role)
                navigate(from , {replace: true})
            }}>Login</button>
        </div>
    )
}

export default LoginPage;