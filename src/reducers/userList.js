import { ADD_USER, SHOW_USERS_LIST } from "../constants/userConst";

const initialState = {
  clientList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      let oldUserList = [];
      for (let key in state.clientList) {
        oldUserList[key] = state.clientList[key];
      }
      oldUserList.push(action.payload);
      return { ...state, clientList: oldUserList };
    case SHOW_USERS_LIST:
      return { ...state, clientList: action.payload };
    default:
      return state;
  }
}
