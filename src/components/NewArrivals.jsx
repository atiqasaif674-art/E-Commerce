import ProductCard from "./ProductCard";
export default function NewArrivals({products,onAddToCart,onToggleWishlist,wishlist}) {
  const newProducts = products.slice(-4);
  return (
    <section className="new-arrivals">
      <h2>New Arrivals ✨</h2>
      <div className="product-container">
        {newProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onToggleWishlist={onToggleWishlist}
            isWishlisted={wishlist.some((item) => item.id === product.id)}/>
        ))}
      </div>
    </section>
  );
}