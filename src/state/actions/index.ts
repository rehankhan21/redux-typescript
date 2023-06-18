import { ActionType } from "../action-types";

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
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
