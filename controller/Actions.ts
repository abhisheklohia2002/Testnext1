const ProductActions = async () => {
  try {
    const callApi = await fetch(`https://fakestoreapi.com/products/`);
    const res = await callApi.json();
    return res;
  } catch (error) {
    return error;
  }
};

export const ProductActionsById = async (id = null) => {
  try {
    const callApi = await fetch(`https://fakestoreapi.com/products/${id}`);
    const res = await callApi.json();
    return res;
  } catch (error) {
    return error;
  }
};

export default ProductActions;
