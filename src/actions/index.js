import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  //return async (dispatch, getState) => {
  const response = await jsonPlaceholder.get("/posts");
  // return {
  //   type: "FETCHED_POSTS",
  //   payload: promise
  // };

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
