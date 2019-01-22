import client from "../service/client";
import { ADD_USER } from "../constants/userConst";

export const addUser = (user) => dispatch => {
  client.post(`/users/add-user`, user).then(res =>
    dispatch({
      type: ADD_USER,
      payload: res.data
    })
  );
};



