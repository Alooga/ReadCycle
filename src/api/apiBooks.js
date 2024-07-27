//Lamada por Id
const getBooksById = (id) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=id:${id}`)
          .then((response) => response.json())
          .then((data) => {
          return data
      })
};


//Lamada por palabra clave
const getBooksByKeyWord = (keyWord) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyWord}`)
            .then((response) => response.json())
            .then((data) => {
            return data
        })
};

//llamada por categoria
const getBooksByCategory = (genero) => {
  
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genero}`)
        .then((response) => response.json())
        .then((data) => {
        return data
      })
    };

//llamada por autor
const getBooksByAuthor = (author) =>{
    //falta url
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`)
    .then((response) => response.json())
        .then((data) => {
        return data
      })
    };

    export {getBooksByKeyWord, getBooksByCategory,getBooksByAuthor, getBooksById}