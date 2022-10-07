import { defineStore } from "pinia";
import Api from "@/api/api.js";
interface Login{
    username:string,
    password:string,
}

export const useUserStore = defineStore("user", () => {
  function login(payload : Login) {
    return Api.login(payload);
  }
  return { login };
});
