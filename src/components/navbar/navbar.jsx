import React from 'react'
import pic from '../../assets/logo.png'

const NavBar = () => {
  return (
    <nav className='flex nav font-nav-font flex-row fixed w-full top-0 items-center justify-evenly mt-4'>
        <div className=""><img src={pic} alt="" className='w-36'/></div>
        <div className="">
            <ul className='nav-ul desktop'>
                <li>Vehicles</li>
                <li>Energy</li>
                <li>Charging</li>
                <li>Discover</li>
                <li>Shop</li>
            </ul>
        </div>
        <div className="">
            <ul className='nav-ul desktop'>
                <li>Shop</li>
                <li>Account</li>
                <li>Menu</li>
            </ul>
            <ul className='nav-ul hidden'>
                <li>Menu</li>
            </ul>

        </div>
    </nav>
  )
}

export default NavBar