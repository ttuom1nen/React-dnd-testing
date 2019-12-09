export const fetchUsers = () => {
  return async function(dispatch, getState) {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json => console.log(json));

    dispatch({
      type: "FETCH_USERS",
      payload: response.data
    });
  };
};
