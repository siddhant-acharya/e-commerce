function ProductCard({ product }) {
    const inStock = product.stock > 0;

  return (
    <>
      <div style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "8px" }}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: "100%", height: "150px", objectFit: "cover" }}
        />

        <h3>{product.title}</h3>
        <p><b>₹{product.price}</b></p>
        <p>Category: {product.category}</p>

        <p style={{ color: inStock ? "green" : "red" }}>
          {inStock ? "In Stock" : "Out Of Stock"}
        </p>

        <button disabled={!inStock}>
          Add to Cart
        </button>
      </div>
    </>
  )
}

export default ProductCard
