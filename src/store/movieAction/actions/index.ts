import { Dispatch } from "redux";
import { Action, MOVIE_TYPE } from "../const";

export const acceptAction = (name: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: MOVIE_TYPE.ACCEPT,
      payload: name,
    });
  };
};

export const rejectAction = (name: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: MOVIE_TYPE.REJECT,
      payload: name,
    });
  };
};
