import { useState, useEffect } from 'react'
import { fetchProducts } from '../services/productApi'
import ProductCard from '../components/ProductCard'

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts().then(data => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    if (loading) return <h2>Loading products</h2>

  return (
    <>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default ProductList
