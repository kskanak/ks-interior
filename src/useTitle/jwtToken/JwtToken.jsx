export const jwtAuthToken = (user) => {
  // get jwt token
  const currenUser = {
    email: user.email,
  };
  fetch("http://localhost:5000/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currenUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("ks-Interior-Token", data.token);
    })
    .catch((error) => console.log(error));
};
