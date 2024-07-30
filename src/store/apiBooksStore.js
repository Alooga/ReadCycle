import { defineStore } from "pinia";

export const useApiStore = defineStore ('apiBooksStore', { 
    state: () => ({
        books: [],
    }),
    actions: {
    //Lamada por Id
     getBooksById(id) {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=id:${id}`)
            .then((response) => response.json())
            .then((data) => {
            this.books = data.items
        })
  },
  //llama por keyword
    getBooksByKeyWord(keyWord) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyWord}`)
            .then((response) => response.json())
            .then((data) => {
            this.books = data.items.volumeInfo
        })
    },
  
    },
    getters: {
        // getBooksByKeyWord(keyWord) {
        //     fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyWord}`)
        //         .then((response) => response.json())
        //         .then((data) => {
        //         this.books = data.items
        //     })
        // },
        
    }

    })