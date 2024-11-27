import React from 'react'
import {  NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='flex flex-center justify-center gap-20 py-5'>
            <NavLink style={(e)=>{ return { 
                color:  e.isActive ? "#FECACA" : "",
                fontWeight : e.isActive ? "bold" : ""

            }
             } } to="/">Home</NavLink>
            <NavLink style={(e)=>{
                return{
                    color: e.isActive ? "#FECACA" : "",
                    fontWeight : e.isActive ? "bold" : ""
                }
            }} to="/user">User</NavLink>
            <NavLink  style={(e)=>{
                return{
                    color: e.isActive ? "#FECACA" : "",
                    fontWeight : e.isActive ? "bold" : ""
                }
            }} to="/about">About</NavLink>
        </nav>
    )
}

export default Nav