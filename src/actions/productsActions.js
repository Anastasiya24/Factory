import client from "../service/client";
import { SHOW_PRODUCTS_LIST } from "../constants/productsConst";

export const showProductsList = (factoryId) => dispatch => {
  client.get(`/products/show-products-list/${factoryId}`).then(res =>
    dispatch({
      type: SHOW_PRODUCTS_LIST,
      payload: res.data
    })
  );
};
