import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  respoitories: repositoriesReducer,
});

export default reducers;

// this is to help react redux know the type of the state we get from useSelector
export type RootState = ReturnType<typeof reducers>;
