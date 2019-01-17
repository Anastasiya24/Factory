import { SHOW_PRODUCTS_LIST } from "../constants/productsConst";

const initialState = {
    productsList: []
};

export default function(state = initialState, action) {
    switch (action.type) {
      case SHOW_PRODUCTS_LIST:
        return {
          ...state,
          productsList: action.payload
        };
      default:
        return state;
    }
  }
  