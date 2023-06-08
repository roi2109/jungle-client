import axios from "axios";
import jwtDecode from "jwt-decode"

axios.defaults.baseURL="http://localhost:3000"

export const createUser= async (user)=>{
  
        return await axios.post('/sign-up',user)
    
}

export const signIn=async(user)=>{
    return await axios.post('/sign-in',{...user})
}
export function getJwt(){
    return localStorage.getItem("Token")
}



export function getUser(){
    try {
      return jwtDecode(getJwt())  
    } catch (error) {
      console.log(error)
    }
}

export const makeAppointment=async(id,role)=>{
  
  try {
    const {data}=await axios.post(`/make-appointment/${id}`,{role})
  return(data)
  } catch (error) {
    console.log(error)
  }
}

export async function getAppointments(data){
  return await axios.get('/appointments',data)
}