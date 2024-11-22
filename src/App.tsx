import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { persistor, store } from "./store";
import router from "./router";
import "./App.css";
import "./firebase";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
