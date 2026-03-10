import { useState } from "react";
import { useAuth } from "../hooks/useAuth";


function LoginPage(){

    const [name, setName] = useState('')
    const [role, setRole] = useState('')

    const {loginHandler} = useAuth()

    return(
        <div>
            <label htmlFor="Name">Name : </label>
            <input type="text" onChange={(e) => {
                setName(e.target.value)
            }} />

            <label htmlFor="role">Role : </label>
            <input type="text"  onChange={(e) => {
                setRole(e.target.value)
            }}/>

            <button onClick={() => {
                loginHandler(name, role)
            }}>Login</button>
        </div>
    )
}

export default LoginPage;