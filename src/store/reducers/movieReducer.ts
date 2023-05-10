import { Action, MOVIE_TYPE } from "../movieAction/const";

const initialState: string[] = [];

const reducer = (state: string[] = initialState, action: Action) => {
  switch (action.type) {
    case MOVIE_TYPE.ACCEPT:
      return state.concat(action.payload);
    case MOVIE_TYPE.REJECT:
    default:
      return state;
  }
};

export default reducer;
