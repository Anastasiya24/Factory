import { SHOW_FACTORIES_LIST } from "../constants/factoriesConst";

const initialState = {
  factoriesList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_FACTORIES_LIST:
      return {
        ...state,
        factoriesList: action.payload
      };
    default:
      return state;
  }
}
