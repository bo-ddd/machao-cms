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
interface PermissionList{
}
interface AddPower{
  permissionName:string,
  pid:number
}
interface deletePower{
  id:number
}
interface userInfo{
  userId:number
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
    return Api.roleList(payload)
  }
  
  function permissionList(payload: PermissionList) {
    return Api.permissionList(payload)
  }

  function addRole(payload: PermissionList) {
    return Api.addRole(payload)
  }
  
  function deleteRole(payload: PermissionList) {
    return Api.deleteRole(payload)
  }

  function addPower(payload: AddPower) {
    return Api.addPower(payload)
  }
  function deletePower(payload: deletePower) {
    return Api.deletePower(payload)
  }
  function userInfo(payload: userInfo) {
    return Api.userInfo(payload)
  }
  return { login, register, userList,roleList,permissionList,addRole ,deleteRole,addPower,deletePower,userInfo};
});
