import axios from "axios";

const callApi = async (method_type, path, data, jwt) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: jwt,
  };

  const baseUrl = "http://192.168.0.55:8080/";
  const fullUrl = `${baseUrl}${path}`;
  if (method_type === "get" || method_type === "delete") {
    return axios({
      method: method_type,
      url: fullUrl,
      headers: headers,
    });
  } else {
    return axios({
      method: method_type,
      url: fullUrl,
      data: data,
      headers: headers,
    });
  }
};

export default {
  createAccount: (form) => callApi("post", "/users/", form),
  login: (form) => callApi("post", "/users/login/", form),
  challenges: (page) => callApi("get", "/challenges/", page),
  challengeDetail: (form) => callApi("get", "/challenges/" + form, ""),
  challengeApply: (form, data, jwt) =>
    callApi("post", `/challenges/${form}/apply_challenge/`, data, jwt),
  profile: (jwt) => callApi("post", "/users/profile/", "", jwt),
};
