import React from 'react';
import './App.css'
import { useNavigate } from 'react-router-dom';
const Courses = () => {
    const nav = useNavigate()
    return (
        <div>
            <h1>Courses available </h1> 
           <h2>
            <ul>
            <li> CSE </li>
            <li> IT  </li>
            <li> ECE  </li>
            <li> EEE  </li>
            <li> AIDS  </li>
            <li> AIML  </li>

            <li> CIVIL   </li>
            <li> MECH    </li>
            </ul>
           </h2>
           <button onClick={()=>{
            nav(-1)
           }}> <i className="fa fa-arrow-left" ></i> </button>
        </div>
    );
};

export default Courses;