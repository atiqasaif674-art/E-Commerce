export default function Cart({cart,onClose,onChangeQuantity,onRemove}) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="cart">
      <button onClick={onClose}>Close ✖</button>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your Cart Is Empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>Rs. {item.price}</p>
            <button onClick={() => onChangeQuantity(item.id, -1)}>-</button>
            {item.quantity}
            <button onClick={() => onChangeQuantity(item.id, 1)}>+</button>
            <button onClick={() => onRemove(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: Rs. {total}</h3>
      <button onClick={() => alert("Order placed! Demo only.")}>Checkout</button>
    </div>
  );
}