interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// instead of having 1 interface for all actions
// have 1 interface for every individuals action
// interface Action {
//   type: string;
//   payload?: any;
// }

// action interfaces
// helps with type guard
// if the action recieved is one of these types
// then we know for 100 percent certainty that it will have the coressponding values
interface SearchRepositoriesAction {
  type: "search_repositories";
}

interface SearchRepositoriesSuccessAction {
  type: "search_repositories_success";
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: "search_repositories_error";
  payload: string;
}

// we are also going to return from our reducer something of type repositoreis state
const reducer = (
  state: RepositoriesState,
  action:
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction
): RepositoriesState => {
  // switch statment counts a type guards as well
  switch (action.type) {
    // this first case means we just started a new search request
    case "search_repositories":
      // since we have to return a type of RepositoriesState
      // now loading, error, and data have to match the types defined in the interface
      return { loading: true, error: null, data: [] };
    // if we got a successful response from the api
    case "search_repositories_success":
      return { loading: false, error: null, data: action.payload };
    case "search_repositories_error":
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
