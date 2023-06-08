import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { roles } from '../roles'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const Store = () => {
const {makeAppointment,user}=useAuth()
const navigate=useNavigate()


const showToastWithImage = (data) => {
  let date=""

  for(let i=0;i<=9;i++){
    date+=data.created_at[i]
  }
  
  let date1=[date[8]+date[9]+date[7]+date[5]+date[6]+date[4]+date[0]+date[1]+date[2]+date[3]]

  toast.info(
    <div>
      <img className='w-50' src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_2.jpg" alt="Image" />
      <span>{`Appointment has been created at ${date1} for ${data.name}`}</span>
    </div>
  );
};


const handleClick=async(role)=>{
  try {
    const data=await makeAppointment(user._id,role)
    
    
showToastWithImage(data)
  } catch (error) {
    console.log(error)
  }
  navigate("/appointments-list")
}


  return (<>
  
  <div className="row m-auto">
   {roles.map((role,index)=>
   
   

   <div key={index} className="card col-2 m-auto">
    <img src={role.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{role.role}</h5>
      <p className="card-text">{role.role} Role Coaching</p>
      <p className="card-text">Price: 50$ per hour</p>
      <button onClick={()=>handleClick(role.role)}  className="btn btn-primary">Set Appointment</button>
    </div>
  </div>

  
  
  )}
  </div>
  
  </>
  )
}

export default Store