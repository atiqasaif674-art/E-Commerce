export default function Wishlist({wishlist,onRemove,onAddToCart}) {
  return (
    <section className="wishlist-section" id="wishlist">
      <h2>My Wishlist ❤️</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="product-container">
          {wishlist.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <h4>Rs. {product.price}</h4>
              <button onClick={() => onAddToCart(product)}>Add To Cart</button>
              <button onClick={() => onRemove(product.id)}>Remove ❤️</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}