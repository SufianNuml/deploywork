import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SingUp() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    axios.defaults.withCredentials = true;
    const navigate=useNavigate();
    const getData=(e)=>
    {
        e.preventDefault();
        console.log(name,email,password);
        axios.post("https://deploywork-api.vercel.app/login",{name,email,password})
        .then(result=> {console.log(result)
             navigate("/login")})
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Register</h2>
            <form onSubmit={getData}>
                <div className='mb-3'>
                    <label htmlFor='name'>
                        <strong>Name</strong>
                    </label>
                    <input
                     type='text'
                     placeholder='Enter Name'
                     autoComplete='off'
                     name='name'
                     className='form-control rounded-0'
                     onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Email</strong>

                    </label>
                    <input
                     type='email'
                     placeholder='Enter Email'
                     autoComplete='off'
                     name='email'
                     className='form-control rounded-0'
                     onChange={(e)=>setEmail(e.target.value)}
                    />

                </div>
              
                <div className='mb-3'>
                    <label htmlFor='password'>
                        <strong>Password</strong>
                    </label>
                    <input
                     type='Password'
                     placeholder='Enter Password'
                     autoComplete='off'
                     name='password'
                     onChange={(e)=>setPassword(e.target.value)}
                     className='form-control rounded-0'
                    />

                </div>
               
                <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
                </form>
                <p>Already Have an Accoun     </p>
                <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
            
        </div>
    </div>
  )
}
