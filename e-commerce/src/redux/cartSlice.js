import { createSlice } from '@reduxjs/toolkit'

const loadCart = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  }
  catch {
    return [];
  }
}

const saveCart = (items) => {
  try {
    localStorage.setItem("cart", JSON.stringify(items));
  }
  catch { }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCart()
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const item = state.items.find(i => i.id === product.id);
      if (item) {
        if (item.quantity < product.stock) {
          item.quantity += 1;
        }
      }
      else {
        state.items.push({ ...product, quantity: 1 });
      }
      saveCart(state.items);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveCart(state.items);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);

      if (item && quantity > 0 && quantity <= item.stock) {
        item.quantity = quantity;
      }
      saveCart(state.items);
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
