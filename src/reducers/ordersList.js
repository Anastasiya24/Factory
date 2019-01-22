import {
  SHOW_ORDERS_LIST,
  ADD_ORDER,
  REMOVE_ORDER
} from "../constants/orderConst";

const initialState = {
  ordersList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_ORDERS_LIST:
      return { ...state, ordersList: action.payload };
    case REMOVE_ORDER:
      let ordersArray = state.ordersList;
      let removedElementId = +action.payload;
      let newOrderArr = ordersArray.filter(el => el.id !== removedElementId);
      return { ...state, ordersList: newOrderArr };
    case ADD_ORDER:
      let ordersArray1 = state.ordersList;
      let newElement = action.payload;
      ordersArray1.push(newElement);
      return { ...state, ordersList: ordersArray1 };
    default:
      return state;
  }
}
