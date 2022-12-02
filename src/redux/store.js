import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { startTransition } from "react";

const middlewares = [reduxThunk];

middlewares.push(logger);

if (process.env.NODE_ENV === " development") {
  middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
