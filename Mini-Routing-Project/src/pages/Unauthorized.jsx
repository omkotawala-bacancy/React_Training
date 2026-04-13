import { useNavigate } from "react-router-dom"


function Unauthorized() {

  const navigate = useNavigate()

  return (
    <div>
      <h1>Error 404</h1>
      <h2>Page Not found</h2>
      <button className="bg-black text-white text-medium border-2"
        onClick={() => {
          navigate('/')
        }}
      >
        Home</button>
    </div>
  )
}

export default Unauthorized