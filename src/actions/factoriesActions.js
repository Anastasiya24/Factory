import client from "../service/client";
import {
  SHOW_FACTORIES_LIST,
  ADD_FACTORY,
  DROP_FACTORY
} from "../constants/factoriesConst";

export const showFactoriesList = () => dispatch => {
  client.get("/show-factories-list").then(res =>
    dispatch({
      type: SHOW_FACTORIES_LIST,
      payload: res.data
    })
  );
};

export const addFactory = factoryInfo => dispatch => {
  client.post("/add-factory", factoryInfo).then(res =>
    dispatch({
      type: ADD_FACTORY,
      payload: res.data[0]
    })
  );
};

export const dropFactory = factoryId => dispatch => {
  client.delete(`/drop-factory/${factoryId}`).then(res =>
    // dispatch({
    //   type: DROP_FACTORY,
    //   payload: res.data
    // })
    console.log("res: ", res.data)
  );
};
