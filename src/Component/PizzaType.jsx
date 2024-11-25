import React from "react";
import PizzaCard from "./PizzaCard";

const PizzaType = () => {
  return (
    <div className="p-10">
      <h1 className="text-center mb-4">Pizza Types</h1>
      <div className="flex flex-wrap justify-center  gap-4">
        <PizzaCard
          image="https://images.pexels.com/photos/28749171/pexels-photo-28749171/free-photo-of-fresh-homemade-artisan-pizza-preparation.jpeg?auto=compress&cs=tinysrgb&w=400"
          title="Margherita"
          content="A classic pizza made with tomato sauce, fresh mozzarella, fresh basil leaves, and a drizzle of olive oil. It's simple but flavorful."
        />
        <PizzaCard
          image="https://images.pexels.com/photos/18912713/pexels-photo-18912713/free-photo-of-pizza-with-mozzarella-shaped-as-ghosts-for-halloween.jpeg?auto=compress&cs=tinysrgb&w=800"
          title="Pepperoni"
          content="Topped with tomato sauce, mozzarella cheese, and a generous amount of pepperoni slices. A fan favorite, especially in the U.S."
        />
        <PizzaCard
          image="https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&w=800"
          title="Four cheese"
          content="Topped with tomato sauce, mozzarella cheese, and a generous amount of pepperoni slices. A fan favorite, especially in the U.S."
        />
      </div>
    </div>
  );
};

export default PizzaType;
