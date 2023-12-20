import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import Header from "./components/Header";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div id="modal-root" />
        <Header />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
