import axios from "axios";

const callApi = async (method_type, path, data, jwt) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: jwt,
  };
  const baseUrl = "http://127.0.0.1:8000";
  const fullUrl = `${baseUrl}${path}`;
  if (method_type === "get" || method_type === "delete") {
    return axios({
      method: method_type,
      headers: headers,
      url: fullUrl,
      data: data,
    });
  } else {
    return axios({
      method: method_type,
      headers: headers,
      data: data,
      url: fullUrl,
    });
  }
};

export default {
  createAccount: (form) => callApi("post", "/users/", form),
  login: (form) => callApi("post", "/users/login/", form),
  challenges: () => callApi("get", "/challenges/", ""),
  challengeDetail: (form) => callApi("get", "/challenges/" + form, ""),
  challengeApply: (form, data, jwt) =>
    callApi("post", `/challenges/${form}/apply_challenge/`, data, jwt),
  profile: (form) => callApi("get", `/users/${form}/profile/`, form),
};
