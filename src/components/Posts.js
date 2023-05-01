import React, { useReducer, useState } from "react";
import { POST_INITIAL_STATES, postReducer } from "../reducers/postReducer";
import { ACTION_TYPES } from "../actions/postActions";

const Posts = () => {
  /*
// Fetch data using state
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const handleFetch = () => {
    setIsLoading(true);
    setIsError(false);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  };
*/

  // using use reducer
  const [state, dispatch] = useReducer(postReducer, POST_INITIAL_STATES);

  const handleFetch = () => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data })
      )
      .catch((error) => dispatch({ type: ACTION_TYPES.FETCH_ERROR }));
  };

  return (
    <>
      <button onClick={handleFetch}> Fetch Data</button>
      {state.isLoading && "Loading..."}
      {state.isError && "something went wrong"}
      {state.data &&
        state.data.map((item) => {
          return <h5 key={item.id}>{item.title}</h5>;
        })}
    </>
  );
};

export default Posts;
