export const testFetch = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`);
  const data = await response.json();

  console.log(data);
};

export const signupFetch = async (username, email, password) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });

  const data = await response.json();
  console.log("signup done: ", data);
};

export const loginFetch = async (username, password) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/users/login`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }
  );

  const data = await response.json();

  return data;
};
