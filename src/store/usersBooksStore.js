import { defineStore } from "pinia";
import usersBooksDB from '../db/usersBooksDB.js';
import usersDB from '../db/usersDB.js';


export const useUsersBooksStore = defineStore ('usersBooksStore', { 
    state: () => ({
    usersBooksApi:[],
    usersBooks:[],
    users: [],

    }),
    actions: {
         booksForApiCards(){
            this.usersBooksApi = usersBooksDB
        
        }, 
        saveBook(book){
            this.usersBooksApi.push(book)
            //unshift
        },

        async booksForCards(){
            this.usersBooks = usersBooksDB;
            this.users = usersDB;
            const userBooksPromises = this.usersBooks.map(async userBook =>{
              const response =  await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${userBook.isbn}`)
                   const data =  await response.json();
                   const bookTitle =  data.items[0].volumeInfo.title
                   const bookAuthor =  data.items[0].volumeInfo.authors
                   const bookImage =  data.items[0].volumeInfo.imageLinks?.thumbnail
                   const bookDescription = data.items[0].volumeInfo.description
                   const bookYear = data.items[0].volumeInfo.publishedDate.slice(0, 4);
                   const bookPublisher = data.items[0].volumeInfo.publisher
                   const isbn = data.items[0].volumeInfo.industryIdentifiers[0].identifier

                 
            
             const user = usersDB.find(user=>user.id == userBook.userId)
             const userName = user.name
             const userLocation = user.location
            
            
             return {id: userBook.id, status:userBook.available, isbn: isbn, title: bookTitle, author:bookAuthor, image:bookImage, description:bookDescription, year:bookYear, publisher:bookPublisher, userName: userName, location: userLocation}
            })
           this.usersBooks = await Promise.all(userBooksPromises)
    
        },

    
       
    }
});

