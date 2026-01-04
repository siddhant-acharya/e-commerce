import { useDispatch, useSelector } from 'react-redux'
import { setSearch, setCategory, setSort, clearFilters } from '../redux/productSlice'

function Filters() {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);

  const categories = ["all", ...new Set(products.map(p => p.category))];

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        placeholder="Search product..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <select onChange={(e) => dispatch(setCategory(e.target.value))}>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <select onChange={(e) => dispatch(setSort(e.target.value))}>
        <option value="">Sort by price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      <button onClick={() => dispatch(clearFilters())}>
        Clear Filters
      </button>
    </div>
  )
}

export default Filters
