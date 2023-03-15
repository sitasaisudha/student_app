import React from 'react';
import './App.css'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const Students = () => {
    const nav = useNavigate()
    return (
        <div>
       
            <h1> Students page </h1>
           
            <div className='container'>
            <div className='container2'>
          
            <NavLink to='1262' className="tags"> 1262 </NavLink>
          
            <NavLink to="1258" className="tags"> 1258 </NavLink>
            <NavLink to="1207" className="tags"> 1207 </NavLink>
            <NavLink to="1202" className="tags"> 1202 </NavLink>
            <NavLink to="1236" className="tags"> 1236 </NavLink>

          </div>
          <div>
            <Outlet/>  
            </div>
            </div>
            
           <button onClick={()=>{
            nav(-1)
           }}> <i className="fa fa-arrow-left" ></i> </button>
            
        
        </div>
    );
};

export default Students;