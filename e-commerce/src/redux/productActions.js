import { fetchStart, fetchSuccess, fetchFailure } from './productSlice'

const fetchProducts = async (dispatch) => {
  try {
    dispatch(fetchStart());
    const res = await fetch("https://dummyjson.com/products?limit=20");
    const data = await res.json();
    dispatch(fetchSuccess(data.products));
  }
  catch (error) {
    dispatch(fetchFailure(error.message));
  }
}

export default fetchProducts
