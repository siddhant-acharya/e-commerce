import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, updateQuantity } from '../redux/cartSlice'

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 && <p>Cart is empty</p>}
      {items.map(item => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginBottom: "15px",
            borderBottom: "1px solid #ddd",
            paddingBottom: "10px"
          }}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            style={{
              width: "70px",
              height: "70px",
              objectFit: "cover",
              borderRadius: "6px"
            }}
          />

          <div style={{ flex: 1 }}>
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>

            <input
              type="number"
              min="1"
              max={item.stock}
              value={item.quantity}
              onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
            />
          </div>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
      <hr />
      <h3>Total Items: {totalItems}</h3>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  )
}

export default Cart
