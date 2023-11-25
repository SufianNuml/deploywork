import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const login= async(e)=>
    {
        e.preventDefault();
        console.log(email,password);
        let result= await fetch("http://localhost:5000/check",{
            method:"Post",
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json();
        console.log(result);
        if(result.password )
        {
            alert("good");
            navigate('/home');
        }
        else{
            alert("not good");
        }
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
         <div className='bg-white p-3 rounded w-25'>
         <h2>Register</h2>
            <form onSubmit={login}>
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
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                    />
                 </div>
                 <div className='mb-3'>
                    <label htmlFor='password'>
                        <strong>Password</strong>
                    </label>
                    <input
                     type='password'
                     placeholder='Enter Password'
                     autoComplete='off'
                     name='password'
                     className='form-control rounded-0'
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                    />
                 </div>
                 <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
            </form>
         </div>
    </div>
  )
}
//  <h1>Login</h1>
// <input className='email' type='text' placeholder='Enter the email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
// <br/>
// <br/>
// <input className='pass' type='password' placeholder='Enter the password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
// <br/>
// <br/>
// <button onClick={login}>Submit</button>