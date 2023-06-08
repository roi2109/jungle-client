import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const LogOut = () => {
  const {logOut}=useAuth()
    const navigate=useNavigate()
    useEffect(()=>{
      logOut()
      navigate("/")
    },[logOut])
}

export default LogOut