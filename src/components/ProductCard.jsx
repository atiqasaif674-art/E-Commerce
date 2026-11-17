export default function ProductCard({product,onAddToCart,onToggleWishlist,isWishlisted}) {
  return (
    <div className="product-card">
      <button className="wishlist-btn" onClick={() => onToggleWishlist(product)}>{isWishlisted ? "❤️" : "🤍"}</button>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <div className="rating">⭐⭐⭐⭐⭐</div>
      <h4>Rs. {product.price.toLocaleString("en-PK")}</h4>
      <button onClick={() => onAddToCart(product)}>Add To Cart 🛒</button>
    </div>
  );
}