import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import NewArrivals from "./components/NewArrivals";
import Footer from "./components/Footer";
import products from "./data/products";

export default function App() {
  //Cart ka data localStorage se load ho rha,JSON.parse()string ko JS array/ob me convert
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  const [showCart, setShowCart] = useState(false);
  // Save Cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  // Save Wishlist
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  // Add To Cart
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>item.id === product.id ? {...item, quantity:item.quantity + 1 }: item);
      }
      return [...prev, {...product, quantity: 1 }];
    });
  };
  // Quantity
  const changeQuantity = (id, amount) => {
    setCart((prev) => prev.map((item) =>item.id === id ? {...item, quantity:item.quantity + amount }: item)
    .filter((item) => item.quantity > 0));
  };
  // Remove From Cart
  const removeProduct = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  // Wishlist
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };
  // Remove Wishlist
  const removeWishlist = (id) => {setWishlist((prev) =>prev.filter((item) => item.id !== id));};
  // Search and Filter
  let filteredProducts = products.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || product.category === category;
    return matchSearch && matchCategory;
  });
  // Price Sorting
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }
  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      <Header cartCount={cartCount} onCartClick={() => setShowCart(true)}/>
      <Hero />
      <Categories selectedCategory={category} onCategoryChange={setCategory}/>
      <section className="products-section" id="products">
        <h2>Our Products 🛍️</h2>
        <div className="product-controls">
          <input type="search" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)}/>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort Products</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
        <div className="product-container">
          {filteredProducts.length > 0 ? (filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} onToggleWishlist={toggleWishlist}
               isWishlisted={wishlist.some((item) => item.id === product.id)}/>))
          ) : (<p>No Products Found!</p>)}
        </div>
      </section>
      <NewArrivals products={products} onAddToCart={addToCart} onToggleWishlist={toggleWishlist} wishlist={wishlist}/>
      <Wishlist wishlist={wishlist} onRemove={removeWishlist} onAddToCart={addToCart}/>
      {showCart && (
        <Cart cart={cart} onClose={() => setShowCart(false)} onChangeQuantity={changeQuantity} onRemove={removeProduct}/>
      )}
      <Footer />
    </>
  );
}