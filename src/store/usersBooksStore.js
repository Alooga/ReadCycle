import { defineStore } from "pinia";
import usersBooksDB from '../db/usersBooksDB.js';


export const useUsersBooksStore = defineStore ('usersBooksStore', { 
    state: () => ({
    usersBooks:"",

    }),
    actions: {
        booksForCards(){
            this.usersBooks = usersBooksDB.map((books) => {
            return books
            })
        }

    },
    getters:{

    }
})
