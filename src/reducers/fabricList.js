import { SHOW_FABRIC_LIST } from "../constants/fabricActions";

const initialState = {
  fabricsList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_FABRIC_LIST:
      return {
        ...state,
        fabricsList: action.payload
      };
    default:
      return state;
  }
}
