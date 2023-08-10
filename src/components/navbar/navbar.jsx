import React from 'react'
import pic from '../../assets/logo.png'

const NavBar = () => {
  return (
    <nav className='flex flex-row fixed w-full top-0 items-center justify-evenly mt-4'>
        <div className=""><img src={pic} alt="" className='w-36'/></div>
        <div className="">
            <ul className='nav-ul'>
                <li>Model S</li>
                <li>Model 3</li>
                <li>Model X</li>
                <li>Model Y</li>
                <li>Solar Roof</li>
                <li>Solar Panels</li>
                <li>Powerwall</li>
            </ul>
        </div>
        <div className="">
            <ul className='nav-ul'>
                <li>Shop</li>
                <li>Account</li>
                <li>Menu</li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar