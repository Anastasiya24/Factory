import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
// import history from "./service/history";
import store from "./service/store";

ReactDOM.render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
      <Router>
        <App />
      </Router>
    {/* </ConnectedRouter> */}
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
