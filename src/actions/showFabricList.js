import client from "../service/client";
import { SHOW_FABRIC_LIST } from "../constants/fabricActions";

export const showFabricList = () => dispatch => {
  client.get("/show-fabric-list").then(res =>
    dispatch({
      type: SHOW_FABRIC_LIST,
      payload: res.data
    })
  );
};
