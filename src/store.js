import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers/habitsReducer";

let store;

export function configureStore() {
  store = createStore(reducer, applyMiddleware(logger));
  return store;
}
y;
