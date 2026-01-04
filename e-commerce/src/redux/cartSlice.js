import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
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
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);

      if (item && quantity > 0 && quantity <= item.stock) {
        item.quantity = quantity;
      }
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
