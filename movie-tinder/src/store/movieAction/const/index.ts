export enum MOVIE_TYPE {
  ACCEPT = "accept",
  REJECT = "reject",
}

interface IAcceptAction {
  type: MOVIE_TYPE.ACCEPT;
  payload: string;
}

interface IRejectAction {
  type: MOVIE_TYPE.REJECT;
  payload: string;
}

export type Action = IAcceptAction | IRejectAction;
