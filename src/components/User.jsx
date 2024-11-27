import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const User = () => {
   return (
      <div className=' w-1/2 m-auto  mt-10'>
         <h1 className='text-5xl text-red-200'>User</h1>
         <div className='flex flex-col mt-5 mb-2 gap-2 w-1/2'>
            <Link className='p-2 bg-red-200 hover: bg-red-300 text-2xl' to="/user/manish">
               manish
            </Link>
            <Link className='p-2 bg-red-200 hover: bg-red-300 text-2xl' to="/user/ayush">
               ayush
            </Link>
            <Link className='p-2 bg-red-200 hover: bg-red-300 text-2xl' to="/user/abhay">
               abhay
            </Link>
         </div>
         <hr />
         <Outlet />
      </div>

   )
}

export default User