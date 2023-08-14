import React from 'react'
import pic from '../../assets/logo.png'
import {FiHelpCircle} from 'react-icons/fi'
import {BsGlobe2} from 'react-icons/bs'
import {MdOutlineAccountCircle} from 'react-icons/md'

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
                <FiHelpCircle size={25}/>
                <BsGlobe2 size={25}/>
                <MdOutlineAccountCircle size={25}/>
            </ul>
            <ul className='nav-ul hidden'>
                <li>Menu</li>
            </ul>

        </div>
    </nav>
  )
}

export default NavBar