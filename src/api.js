import axios from "axios";
import Cookie from "js-cookie";

const instance = axios.create({
  baseURL: process.env.NODE_ENV==="development" ? "http://127.0.0.1:8000/api/v1/" : "https://knubot.onrender.com/api/v1/",
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

export const putMyWebhookLink = ({ link }) => {
  return instance
    .put(
      "links/addlink",
      { link },
      {
        headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" },
      }
    )
    .then((response) => response.data);
};

export const postSendToday = () => {
  return instance
    .post("users/sendtoday", null, {
      headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" },
    })
    .then((response) => response.data);
};

export const postSendAll = () => {
  return instance
    .post("users/sendall", null, {
      headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" },
    })
    .then((response) => response.data);
};

export const deleteMe = () => {
  return instance
    .delete("users/me", {
      headers: { "X-CSRFToken": Cookie.get("csrftoken") || "" },
    })
    .then((response) => response.status);
};
