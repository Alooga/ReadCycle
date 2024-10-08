import { defineStore } from "pinia";
import usersDB from "../db/usersDB.js";

export const useUsersStore = defineStore("usersStore", {
  state: () => ({
    users: [],

  }),
  actions: {
    usersData() {
      this.users = usersDB;
    },
    getUserById(id) {
      return this.users.find(user => user.id === id);
    },
    newUser(object){
      this.users.push(object);
    },
    
  },
 /*  getters: {
    userDataById:  (id) => {
      return (userById) => usersDB.find(id === usersDB.id);
    },
  }, */
});
