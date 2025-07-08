import { useState } from "react";
import "./index.css";
import Cart from "../components/Cart";
import Plants from "../components/Plants";
import PLANTS from "./data";

function App() {
  const [cart, setCart] = useState([]);

  /**
   *  Try to find if a dog already has treats.
   *  If true, then create a new copy of treats by mapping over it and
   *  increasing the quantity of treats for the individual dog by 1.
   *  If false, then create a new treat item with a quantity of 1.
   *  A treat item is just a dog with an additional quantity property.
   */

  const addToCart = (plant) => {
    const plantExists = cart.find((item) => item.id === plant.id);
    if (plantExists) {
      setCart(
        cart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };

  /**
   * First, use `map` to decrease the quantity of the treat to remove by 1.
   * Then, keep only the items that have a quantity greater than 0.
   */
  const removeCart = (plantToRemove) => {
    setCart(
      cart
        .map((item) =>
          item.id === plantToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="container">
      <div className="plants">
        <h1>Proper Plants</h1>
        <h2>Plants</h2>
        <Plants plants={PLANTS} addToCart={addToCart} />
      </div>
      <Cart cart={cart} addToCart={addToCart} removeCart={removeCart} />
    </div>
  );
}

export default App;
