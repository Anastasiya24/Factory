import client from "../service/client";
import { SHOW_ORDERS_LIST } from "../constants/orderConst";

export const showOrdersList = factoryId => dispatch => {
  client.get(`/show-orders-list/${factoryId}`).then(res => {
    dispatch({
        type: SHOW_ORDERS_LIST,
        payload: res.data
    })
  });
};
