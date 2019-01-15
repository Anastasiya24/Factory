import client from "../service/client";
import { SHOW_FACTORIES_LIST } from "../constants/factoriesConst";

export const showFactoriesList = () => dispatch => {
  client.get("/show-factories-list").then(res =>
    dispatch({
      type: SHOW_FACTORIES_LIST,
      payload: res.data
    })
  );
};
