import ProductList from './pages/ProductList'
import Cart from './pages/Cart'

function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        minHeight: "100vh" }}
    >
      <div style={{ padding: "20px" }}>
        <h1 style={{ textAlign: "center" }}>Product Listing</h1>
        <ProductList />
      </div>
      <div
        style={{
          borderLeft: "1px solid #ddd",
          padding: "20px",
          backgroundColor: "#fafafa"
        }}
      >
        <Cart />
      </div>
    </div>
  )
}

export default App
