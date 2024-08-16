import axios from "axios";
import Ip from "./util/Ip";

const callApi = async (method_type, path, data, jwt) => {
  const headers = {
    "Content-Type": "application/json",
    Access: jwt,
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
  createAccount: (form) => callApi("post", "/user/", form),
  login: (form) => callApi("post", "/auth/login/", form),
  challenges: (page) => callApi("get", "/challenge/", page),
  challengeDetail: (form) => callApi("get", "/challenge/" + form, ""),
  challengeApply: (form, data, jwt) =>
    callApi("post", `/challenge/${form}/apply/`, data, jwt),
  deleteChallenge: (challengeId, jwt) => {
    callApi("delete", `/challenge/${challengeId}/`, null, jwt);
  },
  createChallenge: (data, jwt) => callApi("post", "/challenges/", data, jwt),
  myChallenges: (jwt) =>
    callApi("get", "/user/profile/my_challenges/", "", jwt),
  myCertifications: (jwt) =>
    callApi("get", "/challenges/my_certifications/", null, jwt),
  certifications: (form, jwt) =>
    callApi("get", `/challenge/${form}/certification/`, "", jwt),
  createCertification: (challengeId, data, jwt) =>
    callApi(
      "post",
      `/challenge/${challengeId}/certification/create/`,
      data,
      jwt
    ),
  profile: (jwt) => callApi("get", "/user/profile/", "", jwt),
  removeCertification: (id, certificationId, jwt) =>
    callApi(
      "delete",
      `/challenges/${id}/certification?certification_id=${certificationId}`,
      null,
      jwt
    ),
  modify_Certification: (challenge_id, certification_num, data, jwt) =>
    callApi(
      "patch",
      `/challenge/${challenge_id}/certification/${certification_num}/`,
      data,
      jwt
    ),
};
