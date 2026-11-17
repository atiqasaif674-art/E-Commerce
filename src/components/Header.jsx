export default function Header({cartCount,onCartClick}) {
  return (
    <header className="header">
      <h2>ShopEasy</h2>
      <nav>
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#wishlist">Wishlist ❤️</a>
        <a href="#about">About</a>
      </nav>
      <button onClick={onCartClick}>🛒 Cart ({cartCount})</button>
    </header>
  );
}