import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <button className="bg-purple-500 p-5 rounded-full hover:scale-125 hover:-translate-y-3" onClick={()=>navigate('/dashboard')}>Enter The Dashboard</button>
    </div>
  )
}

export default Home