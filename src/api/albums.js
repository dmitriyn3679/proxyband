import {client} from "../utils/fetchClient";

export const getAlbums = (userId) => {
  return client.get(`/users/${userId}/albums`)
}
