import { ACTION_TYPE } from "../action-enum";
import { Action } from "../action-interface";

const initialState: string[] = [];

const reducer = (state: string[] = initialState, action: Action) => {
  switch (action.type) {
    case ACTION_TYPE.ACCEPT:
      return state.concat(action.payload);
    case ACTION_TYPE.REJECT:
      return state;
    default:
      return state;
  }
};

export default reducer;
