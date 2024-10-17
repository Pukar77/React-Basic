import React from 'react'
import { NavLink } from 'react-router-dom' 

function Allpage() {
  return (
    <>
    <div className='flex gap-4 m-1 justify-center bg-black text-white leading-8 '>
    
    <NavLink className ={(e)=>{return e.isActive?"bg-red-500":""}} to={"/"}>Home</NavLink><br></br>
    <NavLink className ={(e)=>{return e.isActive?"bg-red-500":""}}  to={"/aboutus"}>About us</NavLink><br/>
    <NavLink className ={(e)=>{return e.isActive?"bg-red-500":""}} to={"/login"}>Login</NavLink><br/>
    </div>
    
    </>
  )
}

export default Allpage