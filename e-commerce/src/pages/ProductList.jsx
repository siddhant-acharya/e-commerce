import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchProducts from '../redux/productActions'
import Filters from '../components/Filters'
import ProductCard from '../components/ProductCard'

function ProductList() {
  const dispatch = useDispatch();

  const { products, search, category, sort, loading } = useSelector(state => state.products);

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search) {
      result = result.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
    }
    if (category !== 'all') {
      result = result.filter(p => p.category === category);
    }
    if (sort === 'low') {
      result.sort((a, b) => a.price - b.price);
    }
    if (sort === 'high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, search, category, sort]);

  if (loading) return <h2>Loading products...</h2>;

  if (filteredProducts.length === 0) {
    return (
      <>
        <Filters />
        <p style={{ marginTop: "20px" }}>No products found.</p>
      </>
    )
  }

  return (
    <>
      <Filters />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px"
        }}
      >
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default ProductList;
