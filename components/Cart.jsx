export default function Cart({ cart, addToCart, removeCart }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map((plant) => (
        <div key={plant.id} className="cartPlant">
          <span>
            {plant.image} {plant.name}
          </span>
          <div className="addSubstract">
            <button onClick={() => removeCart(plant)}>-</button>
            <span>{plant.quantity}</span>
            <button onClick={() => addToCart(plant)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}
