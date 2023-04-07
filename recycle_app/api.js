import axios from 'axios';

const callApi = async (method_type, path, data, jwt) => {
  const headers = {
    "Authorization": jwt,
    "Content-Type": "application/json",
  };
  const baseUrl = "http://127.0.0.1:8000";
  const fullUrl = `${baseUrl}${path}`;
  if (method_type === "get" || method_type === "delete") {
    return axios({
      method: method_type,
      url: fullUrl,
      data: data,
    });
  } else {
    return axios.post(fullUrl, data);
  }
};

export default {
  createAccount: (form) => callApi("post", "/users/", form),
  login: form => callApi("post", "/users/login/", form),
  challenges: () => callApi("get", "/challenges/",""),
};
