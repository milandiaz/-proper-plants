export default function Plants({ plants, addToCart }) {
  return (
    <div>
      {plants.map((plant) => (
        <div key={plant.id}>
          <div>{plant.image}</div>
          <h2>{plant.name}</h2>
          <button onClick={() => addToCart(plant)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
