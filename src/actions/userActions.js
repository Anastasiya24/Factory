import client from "../service/client";
import { ADD_USER, SHOW_USERS_LIST, SHOW_USER } from "../constants/userConst";

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
    type: SHOW_USERS_LIST,
    payload: res.data
  }))
}

export const showUser = (userId) => dispatch => {
  client.get(`/users/show-user/${userId}`)
  .then(res => dispatch({
    type: SHOW_USER,
    payload: res.data
  }))
}


