import React from 'react';
import './App.css'
import { useNavigate } from 'react-router-dom';
const Grades = () => {
    const nav = useNavigate()
    return (
        <div>
            <h1>  Grades Aavailable </h1>
            <h2>
           
            <ul>
            <li>
            A+ 
            </li>
            <li>
            A
            </li>
            <li>
            B 
            </li>
            <li>
            C  
            </li>
            <li>
            D  
            </li>
            <li>
            E  
            </li>
            <li>
            F 
            </li>
            </ul>
            </h2>
            <button onClick={()=>{
                nav(-1)
               }}> <i className="fa fa-arrow-left" ></i> </button>
        </div>
    );
};

export default Grades;