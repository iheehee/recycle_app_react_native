import axios from "axios";
import Ip from "./util/Ip";

const callApi = async (method_type, path, data, jwt) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: jwt,
  };

  const baseUrl = Ip.localIp;

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
  myCertifications: (jwt) =>
    callApi("get", "/challenges/my_certifications/", null, jwt),
  profile: (jwt) => callApi("get", "/users/profile/", "", jwt),
  removeCertification: (id, certificationId, jwt) =>
    callApi(
      "delete",
      `/challenges/${id}/certification?certification_id=${certificationId}`,
      null,
      jwt
    ),
};
