import { User } from "models/user";
import HttpService from "services/http-service";

const userHttp = new HttpService<User>();

export const getUser = (id: string) => userHttp._getRequest(`user/${id}`);

export const addUser = (user: User) => userHttp._postRequest(`user/addUser`, user);

export const updateUser = (updatedUser: User) =>
  userHttp._putRequest(`user`, updatedUser);

export const deleteUser = () => userHttp._deleteRequest(`user`);
