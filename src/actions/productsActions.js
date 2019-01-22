import client from "../service/client";
import { SHOW_PRODUCTS_LIST, CHANGE_PRODUCT } from "../constants/productsConst";

export const showProductsList = factoryId => dispatch => {
  client.get(`/products/show-products-list/${factoryId}`).then(res =>
    dispatch({
      type: SHOW_PRODUCTS_LIST,
      payload: res.data
    })
  );
};

export const changeProduct = (productId, options) => dispatch => {
  client.put(`/products/change-products/${productId}`, options).then(res =>
    dispatch({
      type: CHANGE_PRODUCT,
      payload: res.data
    })
  );
};
