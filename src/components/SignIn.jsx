
import React, { useState } from 'react'
import Joi from 'joi';
import  {useFormik}  from 'formik'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
const validationSchema = Joi.object({
    email: Joi.string().email({tlds:false}).required(),
    password: Joi.string().min(6).required()
  });

const SignIn = () => {
  const {logIn}=useAuth()
    const navigate=useNavigate()
    const [error,setError]=useState("")
    const formik=useFormik({validateOnMount:true,initialValues: {
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
      async onSubmit(values){

          try {
       await logIn(values)

        navigate('/store')
      } catch ({response}) {
       setError(response.data)
      }
    
      }
    
     })
  return (
    <>
    <div>SignIn</div>
    <form onSubmit={formik.handleSubmit}noValidate>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <p className='bg-danger fs-3'>{error}</p>
    <input type="email" className="form-control" id="email" name="email"  onChange={formik.handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input  type="password" className="form-control" id="password" name="password"onChange={formik.handleChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</>
  )
}
export default SignIn









