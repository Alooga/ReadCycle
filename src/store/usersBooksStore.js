import { defineStore } from "pinia";
import usersBooksDB from '../db/usersBooksDB.js';


export const useUsersBooksStore = defineStore ('usersBooksStore', { 
    state: () => ({
    bookId:"",
    userId:"",
    available:"",
    usersBooks:"",

    }),
    action: {
        booksForCards(){
            // for (book of usersBooksDB) {
            //     this.bookId = book.id
            //     this.userId = book.userId
            //     this.available = book.available
            // }
            this.usersBooks = usersBooksDB.map((books) => {
            return books
            })
        }

    },
    getters:{

    }
})
