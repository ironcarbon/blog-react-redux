import { combineReducers } from "redux";
import postsReducer from "./postReducer";
import postReducer from "./postReducer";

export default combineReducers({
  post: postReducer
});
