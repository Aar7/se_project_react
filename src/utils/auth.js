export const BASE_URL = "http://localhost:3001";

async function checkResponse(res) {
  return res.ok
    ? await res.json()
    : Promise.reject(`Error: ${res.status}, ${res.statusCode}`);
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

export const getUserInfo = async (token) => {
  console.warn("getUserInfo called");
  console.log("token from getUserInfo: ", token);
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",

      authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.ok
      ? res.json()
      : Promise.reject(`Token-login error: ${res.status}`);
  });
};

export const changeUserInfo = async ({ name, avatar }, token) => {
  console.warn("changeUserInfo called...");

  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify({ name, avatar }),
  })
    .then(checkResponse)
    .catch(responseError);
};

export const addCardLike = async (id, token) => {
  console.log("Token from addCardlike: ", token);
  console.log("User id: ", id);

  try {
    const res = await fetch(`${BASE_URL}/items/${id}/likes`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    return checkResponse(res);
  } catch (error) {
    return responseError(error);
  }
};

export const removeCardLike = async (id, token) => {
  try {
    const res = await fetch(`${BASE_URL}/items/${id}/likes`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    return checkResponse(res);
  } catch (error) {
    return responseError(error);
  }
};
