export const signup = async () => {
  const response = await fetch("http:/localhost:5003/users/signup", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      username: username,
      email: email,
      password: password,
    },
  });
};
