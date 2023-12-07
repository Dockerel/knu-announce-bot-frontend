import axios from "axios";
import Cookie from "js-cookie";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  withCredentials: true,
});

export const getMe = () =>
  instance.get("users/me").then((response) => response.data);

export const signIn = ({ username, password }) => {
  return instance
    .post(
      "users/signin",
      { username, password },
      { headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" } }
    )
    .then((response) => response.data);
};

export const signUp = ({ username, password, password_check }) => {
  return instance
    .post(
      "users/signup",
      { username, password, password_check },
      { headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" } }
    )
    .then((response) => response.data);
};

export const signOut = () => {
  return instance
    .post("users/signout", null, {
      headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" },
    })
    .then((response) => response.data);
};

export const getMyWebhookLink = () =>
  instance.get("links/me").then((res) => res.data);
