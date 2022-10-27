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

export const useUserStore = defineStore("user", () => {
  function login(payload: Login) {
    return Api.login(payload);
  }

  function register(payload: Register) {
    return Api.register(payload);
  }
  return { login, register };
});
