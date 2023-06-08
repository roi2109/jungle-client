import React, { createContext, useEffect } from 'react'
import {getUser,signIn,getJwt,createUser,makeAppointment}from '../utils/axios'
import { useState } from 'react'



export const context=createContext(null)
 const AuthContext = ({children}) => {

const [user,setUser]=useState(getUser())


function logOut(){
  localStorage.removeItem("Token")
  if(user){
    refreshUser()
  }
}
function refreshUser(){
  setUser(getUser())
}
useEffect(()=>{
  refreshUser()
},[])

async function logIn(values){
  const {data}= await signIn(values)
  localStorage.setItem("Token", data);
  setUser(getUser())
}
  return (
    <>
<context.Provider value={{getUser,user,logOut,logIn,makeAppointment}}>



{children}
</context.Provider>

    </>
  )
}
export default AuthContext