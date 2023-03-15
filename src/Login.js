import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import './App.css'

const Login = () => {
    const nav = useNavigate()
    localStorage.setItem("user","sudha");
    localStorage.setItem("pass","sai123")

    const {register , handleSubmit,
        formState:errors
  
    } = useForm()

    const submitted = (fdata)=>{
        let u_s = localStorage.getItem("user");
        let p_s = localStorage.getItem("pass")
        let u = fdata.uname;
        let p = fdata.pname;
        if((u_s === u) && (p_s === p ) ){
        
            nav("/")
        }
    }
    return (
        <div>
        <center>
       
            <h1> login form </h1>
            <form onSubmit={handleSubmit(submitted)}>
            <table border="1" className='tab'>
            <thead>
            </thead>
            <tbody>
            <tr>
            <th> username </th>
            <td>  <input className='inpt' type="text" {...register('uname',{
                required:true
            })} />
           </td>
            </tr>

            <tr>
            <th>Password </th>
            <td>
             <input className='inpt' type="password" {...register('pname',{
                required:true
             })} />
            </td>
            </tr>
           
           
          
            </tbody>
            </table>
            <input  className='btnu' type="submit" value="submit" /> 
            </form>
            <button onClick={()=>{
                nav(-1)
               }}> <i className="fa fa-arrow-left" ></i> </button>
            </center>
        </div>
    );
};

export default Login;