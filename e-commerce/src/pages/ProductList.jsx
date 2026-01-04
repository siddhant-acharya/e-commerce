import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchProducts from '../redux/productActions'
import ProductCard from '../components/ProductCard'

function ProductList() {
    const dispatch = useDispatch();
    const { products, loading } = useSelector(state => state.products);

    useEffect(() => {
        fetchProducts(dispatch);
    }, [dispatch]);

    if (loading) return <h2>Loading products</h2>

  return (
    <>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px" }}
      >
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default ProductList
