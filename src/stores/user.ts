import { defineStore } from "pinia";
import Api from "@/api/api.js";

interface Login {
  username: string,
  password: string,
}

interface Register{
    username: string,
    password: string,
    avatarName: string,
    phoneNumber: string
}
interface UserList{
    pageNum: number,
    pageSize: number
}
interface RoleList{
}

export const useUserStore = defineStore("user", () => {
  function login(payload: Login) {
    return Api.login(payload);
  }

  function register(payload: Register) {
    return Api.register(payload);
  }

  function userList(payload: UserList) {
    return Api.userList(payload)
  }
  
  function roleList(payload: RoleList) {
    return Api.userList(payload)
  }
  
  function permissionList(payload: RoleList) {
    return Api.permissionList(payload)
  }
  return { login, register, userList,roleList,permissionList };
});
