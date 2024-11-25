import React from "react";
import Navbar from "./Component/Navbar";
import Caroussel from "./Component/Caroussel";
import AboutPizza from "./Component/AboutPizza";
import PizzaType from "./Component/PizzaType";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Caroussel />
      <AboutPizza />
      <PizzaType />
      <Footer />
    </div>
  );
};

export default App;
