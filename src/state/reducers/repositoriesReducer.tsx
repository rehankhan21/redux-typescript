interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface Action {
  type: string;
  payload?: any;
}

// we are also going to return from our reducer something of type repositoreis state
const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
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
