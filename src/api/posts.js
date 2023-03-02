import {client} from "../utils/fetchClient";

export const getPosts = (userId) => {
  return client.get(`/posts/?userId=${userId}`);
};
