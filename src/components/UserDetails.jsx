import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
    const {name} = useParams()
    const navigate = useNavigate()

    const GoBackHandler = ()=> navigate("/user") //navigate(-1)
    return (
        <div className=' w-1/2 m-auto  mt-10'>
            <h1 className='text-5xl text-red-200 '>User Details</h1>
            <h3 className='mt-2 mb-3 text-2xl'> hello!! {name}</h3>
            <button onClick={GoBackHandler} className=' px-3 py-2 rounded-full bg-zinc-300 text-white'>go back</button>
        </div>
    )
}

export default UserDetails