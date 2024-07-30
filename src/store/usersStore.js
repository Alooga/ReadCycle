import { defineStore } from "pinia";
import usersDB from '../db/usersDB.js';


export const useUsersStore = defineStore ('usersStore', { 
    state: () => ({
        name: "",
        location: "",
        email:"",
        user:[],
    }),
    actions: {
        usersData() {
            for (user of usersDB) {
                this.name = user.name
                this.location = user.location
                this.email = user.email

            }
        }

    },
    getters: {
        userDataById: (id) => {
          
            return (user) =>   usersDB.find(id === usersDB.id)
        }
    }

})
