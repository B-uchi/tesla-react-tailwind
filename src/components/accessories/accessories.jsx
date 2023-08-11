import React from 'react'

const Accessories = () => {
  return (
    <div className='cover bg-7 flex flex-col items-center justify-between'>
      <div className="top text-center mt-20">
        <h1 className="font-bold">Accessories</h1>
      </div>
      <div className="flex flex-col items-center ">
        <div className="bottom flex -mt-24 space-x-20 justify-between">
          <button
            id="btn-one"
            className="bg-[#5c5e62] hover:scale-110 transition-all font-bold rounded-lg w-64 py-1.5 px-1"
          >
            Shop Now
          </button>
        </div>
        <ul className='flex mt-2 footer-container'>
          <li><a href="#" className='footer font-nav-font'>Tesla &copy; 2023 </a></li>
          <li><a href="#" className='footer font-nav-font'>Privacy & Legal</a></li>
          <li><a href="#" className='footer font-nav-font'>Vehicle Recalls</a></li>
          <li><a href="#" className='footer font-nav-font'>Contact</a></li>
          <li><a href="#" className='footer font-nav-font'>News</a></li>
          <li><a href="#" className='footer font-nav-font'>Get Updates</a></li>
          <li><a href="#" className='footer font-nav-font'>Locations</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Accessories