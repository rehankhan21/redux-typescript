import axios from "axios";
// this is a type definition for dispatch
import { Dispatch } from "redux";
import { ActionType } from "../action-types/index";

import { Action } from "../actions";

export const searchRepositories = (term: string) => {
  // dispatch is how we manually dispatch action directly into the redux store
  // this is saying you can only call Dispatch that matches a type of action
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
