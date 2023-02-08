import { CounterReducer } from "./Reducer";
import { legacy_createStore as createStore } from "redux";

export const Store = createStore(
  CounterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
