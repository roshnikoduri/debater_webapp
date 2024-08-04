export const BASE_URL = "http://localhost:8000";
export const DISCUSSION_LIST_API = `${BASE_URL}/topic/`;
export const CREATE_DISCUSSION_API = `${BASE_URL}/topic/create`;
export const SIGNUP_API = `${BASE_URL}/user/create`;
export const LOGIN_API = `${BASE_URL}/user/validate`;
export const COMMENT_LIST = `${BASE_URL}/comment/`;
export const CREATE_COMMENT = `${BASE_URL}/comment/create`;
export const TURNAMENT_LIST = `${BASE_URL}/turnament`;


export default {
  DISCUSSION_LIST_API,
  CREATE_DISCUSSION_API,
  SIGNUP_API,
  LOGIN_API,
  COMMENT_LIST,
  CREATE_COMMENT,
  TURNAMENT_LIST,
};
