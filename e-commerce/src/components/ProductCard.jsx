import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const inStock = product.stock > 0;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "8px"
      }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
          borderRadius: "6px",
          marginBottom: "10px"
        }}
      />

      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <p style={{ color: inStock ? 'green' : 'red' }}>
        {inStock ? 'In Stock' : 'Out Of Stock'}
      </p>

      <button
        disabled={!inStock}
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard
