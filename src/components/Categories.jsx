const categories = [
  { name: "Fashion", icon: "👗" },
  { name: "Electronics", icon: "💻" },
  { name: "Accessories", icon: "👜" },
  { name: "Beauty", icon: "💄" }
];
export default function Categories({ selectedCategory, onCategoryChange }) {
  return (
    <section className="categories">
      <h2>Shop By Category</h2>
      <div className="category-container">
        {categories.map((item) => (
          <button key={item.name} className={selectedCategory === item.name ? "category-card selected" :"category-card"}
            onClick={() => onCategoryChange(item.name)}>
            <span>{item.icon}</span>
            <h3>{item.name}</h3>
          </button>
        ))}
        <button className={selectedCategory === "All" ? "category-card selected" : "category-card"}
          onClick={() => onCategoryChange("All")}>
          <span>🛍️</span>
          <h3>All Products</h3>
        </button>
      </div>
    </section>
  );
}