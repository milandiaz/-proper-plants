export default function Plants({ plants, addToCart }) {
  return (
    <div className="ordered-plants">
      {plants.map((plant) => (
        <div key={plant.id} className="plant">
          <div className="imagePlants">{plant.image}</div>
          <h2>{plant.name}</h2>
          <button onClick={() => addToCart(plant)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
