import React from 'react'

const Model3 = () => {
  return (
    <div className='cover bg-1 flex flex-col items-center justify-between'>
      <div className="top text-center mt-20">
        <h1 className="font-bold">Model 3</h1>
        <p>Starting ap $32,740</p>
        <small>After Federal Tax Credit</small>
      </div>
      <div className="flex flex-col items-center ">
        <div className="bottom flex -mt-24 justify-between">
          <button id="btn-two" className="bg-[#efefef] hover:scale-110 transition-all font-bold rounded-lg w-64 py-1.5 px-1">
            Explore Inventory
          </button>
          <button id="btn-one" className="bg-[#5c5e62] hover:scale-110 transition-all font-bold rounded-lg w-64 py-1.5 px-1">
            Custom Order
          </button>
        </div>
        <small className="mt-3 small">
          3 months free Supercharging when you take delivery of a new Inventory
          vehicle by Jun 30
        </small>
      </div>

    </div>
  )
}

export default Model3