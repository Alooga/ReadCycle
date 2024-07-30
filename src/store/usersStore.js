import { defineStore } from "pinia";
import usersDB from '../db/usersDB.js';


export const useUsersStore = defineStore ('usersStore', { 
    state: () => ({
        users:[],
        userById:"",
    }),
    actions: {
        usersData() {
            this.users = usersDB.map((users) => {
                return users
                })
        }

    },
    getters: {
        userDataById: (id) => {
          
            return (userById) =>   usersDB.find(id === usersDB.id)
        }
    }

})
