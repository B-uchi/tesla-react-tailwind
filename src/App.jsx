import React from "react";
import NavBar from "./components/navbar/navbar";
import Model3 from "./components/model 3/model3";
import ModelY from "./components/model y/modelY";
import ModelS from "./components/model s/modelS";
import ModelX from "./components/model x/modelX";
import SolarPanels from "./components/solar panels/solarPanels";
import SolarRoof from "./components/solar roof/solarRoof";
import Accessories from "./components/accessories/accessories";

const App = () => {
  return (
    <main style={{height: "100vh", scrollSnapType: "y mandatory",overflowX: "hidden", overflow: scroll}}>
      <NavBar/>
      <Model3/>
      <ModelY/>
      <ModelS/>
      <ModelX/>
      <SolarPanels/>
      <SolarRoof/>
      <Accessories/>
    </main>
  );
};

export default App;
