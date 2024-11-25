import React from "react";

const AboutPizza = () => {
  return (
    <div className="flex  justify-center gap-4 p-4 mt-4">
      <div>
        <img
          src="https://images.pexels.com/photos/2323182/pexels-photo-2323182.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="pizza"
          className="h-72 w-56"
        ></img>
      </div>
      <div>
        <h1>About Pizza</h1>
        <p className="max-w-xl">
          Pizza is one of the most beloved dishes worldwide, originating from
          Naples, Italy. This flatbread topped with tomato sauce, cheese, and
          various toppings has evolved into countless variations across
          cultures. Traditional Italian pizzas, like Margherita and Marinara,
          are known for their simplicity and high-quality ingredients.
        </p>
      </div>
    </div>
  );
};

export default AboutPizza;
