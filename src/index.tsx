import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/store";
import { Provider } from "react-redux/es/exports";
import RootComponent from "./component/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <RootComponent />
  </Provider>
);
