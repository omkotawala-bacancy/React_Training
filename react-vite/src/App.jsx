import { useState, useEffect, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

async function loadUser() {
  const response = await fetch('https://dummyjson.com/users/1')
  const result = await response.json()
  return result
}
function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    loadUser().then(res => {  
      console.log(res)
      setUser({
        ...res,
        iamgeURL: "https://i.imgur.com/yXOvdOSs.jpg",
        imgSize: 90
      })
    })
  }, [])

  return (
    <>
      <h1>{user?.firstName}</h1>
      {user && 
      <img
        src = {user.iamgeURL}
        width={user.imgSize}
        alt="profile"
      />}
      <img
        src = {reactLogo}
        style={{width: "100px", height: "100px"}}
        alt="logo"
      />
    </>
  )
}

export default App
