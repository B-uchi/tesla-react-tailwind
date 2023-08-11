import React from "react";

const SolarRoof = () => {
  return (
    <div className="cover bg-6 flex flex-col items-center justify-between">
      <div className="top text-center mt-20">
        <h1 className="font-bold">Solar Roof</h1>
        <a href="#" className="underline">
          <p className="-mt-2">Produce Clean Energy From Your Roof</p>
        </a>
      </div>
      <div className="flex flex-col items-center ">
        <div className="bottom flex -mt-24 justify-between">
          <button
            id="btn-two"
            className="bg-[#efefef] hover:scale-110 transition-all font-bold rounded-lg w-64 py-1.5 px-1"
          >
            Order Now
          </button>
          <button
            id="btn-one"
            className="bg-[#5c5e62] hover:scale-110 transition-all font-bold rounded-lg w-64 py-1.5 px-1"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolarRoof;
