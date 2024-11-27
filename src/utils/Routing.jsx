import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
import UserDetails from '../components/UserDetails'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/user" element={<User></User>}>
                <Route path="/user/:name" element={<UserDetails />} />
            </Route>
            <Route path="/about" element={<About></About>} />

        </Routes>
    )
}

export default Routing