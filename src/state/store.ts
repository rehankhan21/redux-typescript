import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// pass our reducers, an inital state an empty object, apply reduce thunk middleware
export const store = createStore(reducers, {}, applyMiddleware(thunk));
