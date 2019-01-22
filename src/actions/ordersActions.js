import client from "../service/client";
import {
  SHOW_ORDERS_LIST,
  ADD_ORDER,
  REMOVE_ORDER
} from "../constants/orderConst";

export const showOrdersList = factoryId => dispatch => {
  client.get(`/order/show-orders-list/${factoryId}`).then(res => {
    dispatch({
      type: SHOW_ORDERS_LIST,
      payload: res.data
    });
  });
};

export const dropOrder = orderId => dispatch => {
  client.delete(`/order/drop-order/${orderId}`).then(res =>{
    dispatch({
      type: REMOVE_ORDER,
      payload: res.data
    })}
  );
};

export const addOrder = info => dispatch => {
  client.post("/order/add-order", info).then(res =>
    dispatch({
      type: ADD_ORDER,
      payload: res.data
    })
  );
};
