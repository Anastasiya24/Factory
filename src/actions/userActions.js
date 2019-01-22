import client from "../service/client";
import { ADD_USER, SHOW_USER_LIST } from "../constants/userConst";

export const addUser = (user) => dispatch => {
  client.post(`/users/add-user`, user).then(res =>
    dispatch({
      type: ADD_USER,
      payload: res.data
    })
  );
};

export const showUserList = () => dispatch => {
  
  client.get("/users/show-users-list")
  .then(res => dispatch({
    type: SHOW_USER_LIST,
    payload: res.data
  }))
}

