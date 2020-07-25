import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import productReducer from "./store/reducers/products";
import ProductProvider from "./context/product-context";
const rootReducer = combineReducers({
  shop: productReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <ProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider>,
  document.getElementById("root")
);
