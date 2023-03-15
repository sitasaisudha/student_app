import React from 'react';
import { Routes,Route,NavLink } from 'react-router-dom';
import Courses from './Courses';
import Dash from './Dash';
import Grades from './Grades';
import './App.css'
import Students from './Students';
import S1 from './S1';
import S2 from './S2';
import Login from './Login';
import Pg from './Pg';
import S3 from './S3';
import S5 from './S5';
import S4 from './S4';


const App = () => {
  
  const changestyle= ({isActive}) => {
    return{
      color: isActive ? 'red' : 'black',
    }
  }
  
  return (
    <div>
   <center>
   
   
    <div className='bigdiv'>
      <NavLink to="/" className="anchr" style={changestyle}>Dashboard  </NavLink>
      <NavLink to="courses" className="anchr" style={changestyle}> Couses  </NavLink>
      <NavLink to="grades" className="anchr" style={changestyle}> Grades   </NavLink>
      <NavLink to="students"  className="anchr" style={changestyle}>Students</NavLink>
      <NavLink to="login"> <button>Login  </button> </NavLink>
      
      </div>
    <Routes>
    <Route path="/" element={<Dash/>} />
    <Route path='courses'  element={<Courses/>} />
    <Route path='grades' element={<Grades/>} />
    <Route path='students' element={<Students/>}>
    
    <Route path='1262' element={<S1/>} />
    <Route path='1258' element={<S2/>} />
    <Route path='1207' element={<S3/>} />
    <Route path='1202' element={<S5/>} />
    <Route path='1236' element={<S4/>} />
    
    </Route>
    <Route path='login' element={<Login/> }/>
    <Route path='*' element={<Pg/> } />
    </Routes>
    </center>
   
    </div>
    
  );
};

export default App;