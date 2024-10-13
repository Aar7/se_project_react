export const BASE_URL = "http://localhost:3001";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}
function responseError(error) {
  console.error(error);
}

export const register = async ({ email, password, name, avatar }) => {
  console.log(`auth.register called`);
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, avatar }),
  })
    .then(checkResponse)
    .catch(responseError);
};

export const login = async ({ email, password }) => {
  console.log(`auth.login called`);
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then(checkResponse)
    .catch(responseError);
};

export const tokenCheck = async (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};
