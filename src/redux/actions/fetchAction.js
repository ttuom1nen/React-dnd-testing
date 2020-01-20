export const fetchUsers = () => {
  return async function(dispatch, getState) {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json =>
        dispatch({
          type: "FETCH_USERS",
          payload: json
        })
      );
  };
};
