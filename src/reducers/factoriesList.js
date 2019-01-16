import { SHOW_FACTORIES_LIST, ADD_FACTORY, DROP_FACTORY } from "../constants/factoriesConst";

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
    case ADD_FACTORY:
      let oldFactoriesList = state.factoriesList;
      oldFactoriesList.push(action.payload);
      return {
        ...state,
        factoriesList: oldFactoriesList
      };
    case DROP_FACTORY:
    default:
      return state;
  }
}
