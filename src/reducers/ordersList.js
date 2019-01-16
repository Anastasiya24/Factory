import { SHOW_ORDERS_LIST } from "../constants/orderConst";

const initialState = {
  ordersList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_ORDERS_LIST:
      return { ...state, ordersList: action.payload };
    default:
      return state;
  }
}
