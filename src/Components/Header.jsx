import React from 'react'
import natLogo from '../Images/natlogo.png'

const Header = () => {
  return (
    <div className="w-screen flex flex-row justify-start items-center bg-purple-700 text-white">
        <img src={natLogo} className="h-20 w-20" alt="logo"/>
        <div className="font-extrabold">
        Natwest Buisness Insights
        </div>
        <div className="ml-auto m-2">
            Account Place Holder
        </div>
    </div>
  )
}

export default Header