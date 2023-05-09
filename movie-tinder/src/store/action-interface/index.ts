import { ACTION_TYPE } from "../action-enum";

interface IAcceptAction {
  type: ACTION_TYPE.ACCEPT;
  payload: string;
}

interface IRejectAction {
  type: ACTION_TYPE.REJECT;
  payload: string;
}

export type Action = IAcceptAction | IRejectAction;
