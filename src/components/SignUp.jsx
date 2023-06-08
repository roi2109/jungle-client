import React, { useState } from 'react'
import Joi from 'joi';
import  {useFormik}  from 'formik'
import { createUser } from '../utils/axios';
import { useNavigate } from 'react-router-dom';
const validationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({tlds:false}).required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")),
});


const SignUp = () => {
const navigate=useNavigate()
  const [error,setError]=useState("")
 const formik=useFormik({validateOnMount:true,initialValues: {
    name: '',
    email: '',
    password: '',
  },
   validate:(values)=>{
    
    const schema = validationSchema;
    const { error } = schema.validate(values, { abortEarly: false });
    if (!error) return {};
    return error.details.reduce((acc, curr) => {
      acc[curr.path[0]] = curr.message;
      return acc;
    }, {});
  
  },
  async onSubmit (values){
  try {
    const {data}=await createUser(values)
    navigate('/sign-in')
    
  } catch ({response}) {
   setError(response.data)
  }

  }

 })
 
  return (<>
    <div>SignUp</div>
    <form onSubmit={formik.handleSubmit}noValidate>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name"onChange={formik.handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <p className='text-danger'>{error}</p>
    <input type="email" className="form-control" id="email" name="email"  onChange={formik.handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password"onChange={formik.handleChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</>
  )
}

export default SignUp