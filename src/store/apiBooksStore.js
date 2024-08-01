import { defineStore } from "pinia";

export const useApiStore = defineStore ('apiBooksStore', { 
    state: () => ({
        books: [],
        book: null,
    }),
    actions: {
    //Lamada por Id
     getBooksByIsbn(isbn) {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
            .then((response) => response.json())
            .then((data) => {
            this.books = data.items
        })
        .catch(error => {
            console.error("Error fetching books by ISBN:", error);
        });
  },
  //llama por keyword
    getBooksByKeyWord(keyWord) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyWord}`)
            .then((response) => response.json())
            .then((data) => {
            this.books = data.items
        })
        .catch(error => {
            console.error("Error fetching books by keyword:", error);
        });
    },
  
    },
  

    })