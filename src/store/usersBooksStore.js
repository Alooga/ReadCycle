import { defineStore } from "pinia";
import usersBooksDB from '../db/usersBooksDB.js';


export const useUsersBooksStore = defineStore ('usersBooksStore', { 
    state: () => ({
    usersBooks:[],

    }),
    actions: {
      /*   booksForCards(){
            this.usersBooks = usersBooksDB.map((books) => {
            return books
            })
        } */
        booksForCards(){
            this.usersBooks = usersBooksDB;
        },
        getBooksByUserId(userId) {
            return this.usersBooks.filter(book => book.userId === userId);
        },
        getUserBookByBookId(bookId) {
            return this.usersBooks.find(book => book.id === bookId && book.available);
        }
    }
});

