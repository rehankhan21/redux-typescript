import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

// we are also going to return from our reducer something of type repositories state
const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  // switch statment counts a type guards as well
  switch (action.type) {
    // this first case means we just started a new search request
    case ActionType.SEARCH_REPOSITORIES:
      // since we have to return a type of RepositoriesState
      // now loading, error, and data have to match the types defined in the interface
      return { loading: true, error: null, data: [] };
    // if we got a successful response from the api
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
