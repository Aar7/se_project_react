// export const BASE_URL = "http://localhost:3001";
// export const BASE_URL = "http://34.72.174.88:3001";
export const BASE_URL =
  process.env === "production"
    ? "https://api.aarwtwr.fairuse.org"
    : "http://localhost:3001";

async function checkResponse(res) {
  return res.ok
    ? await res.json()
    : Promise.reject(`Error: ${res.status}, ${res.statusCode}`);
}

async function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export function responseError(error) {
  console.error(error);
}

// ---------------------------
// ---------------------------
// ---------------------------

export const register = async ({ email, password, name, avatar }) => {
  console.warn(`auth.register called`);

  return request(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, avatar }),
  });
};

export const login = async ({ email, password }) => {
  console.warn(`auth.login called`);

  return request(`${BASE_URL}/signin`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
};

export const getUserInfo = async (token) => {
  console.warn("auth.getUserInfo called");
  // return fetch(`${BASE_URL}/users/me`, {
  //   method: "GET",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     authorization: token,
  //   },
  // }).then((res) => {
  //   return res.ok
  //     ? res.json()
  //     : Promise.reject(`Token-login error: ${res.status}`);
  // });

  return request(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
  });
};

export const changeUserInfo = async ({ name, avatar }, token) => {
  console.warn("auth.changeUserInfo called...");

  return request(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify({ name, avatar }),
  });
};

export const addCardLike = async (id, token) => {
  return request(`${BASE_URL}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
  });
};

export const removeCardLike = async (id, token) => {
  return request(`${BASE_URL}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
  });
};
