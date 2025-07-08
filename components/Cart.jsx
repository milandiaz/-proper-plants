export default function Cart({ cart, addToCart, removeCart }) {
  return (
    <div>
      <h2>Cart</h2>
      {cart.map((plant) => (
        <div key={plant.id}>
          <span>
            {plant.image} {plant.name}
          </span>
          <button onClick={() => removeCart(plant)}>-</button>
          <span>{plant.quantity}</span>
          <button onClick={() => addToCart(plant)}>+</button>
        </div>
      ))}
    </div>
  );
}
