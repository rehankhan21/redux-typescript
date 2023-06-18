import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();

  // this gives us back an object with all the actions being used with dispatch
  // this allows use to only have to call searchRepo and not have to call dispatch everytime
  // ex. { searchRepositories: dispatch(searchRepositories)}
  return bindActionCreators(actionCreators, dispatch);
};
