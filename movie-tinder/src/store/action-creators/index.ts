import { ACTION_TYPE } from "../action-enum";
import { Dispatch } from "redux";
import { Action } from "../action-interface";

export const acceptAction = (name: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ACTION_TYPE.ACCEPT,
      payload: name,
    });
  };
};

export const rejectAction = (name: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ACTION_TYPE.REJECT,
      payload: name,
    });
  };
};
