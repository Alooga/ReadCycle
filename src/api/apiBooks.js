//definir variables

let keyWord = "";
let genero = "";
let author = "";

function getBooksByKeyWord(){
    //falta url
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyWord}`)
    .then((resultado) => {
        if(!resultado.ok) throw new Error("Hay un error " + resultado.status + errorMsj)
        return resultado.json()
      })
      .then((datos) =>{
        this.movies = datos
        this.loading = false

      })

      .catch((error) =>{
        this.errorMsj = error
        this.loading = false
      });
    };

function getBooksByCategory(){
    //falta url
    fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genero}`)
    .then((resultado) => {
        if(!resultado.ok) throw new Error("Hay un error " + resultado.status + errorMsj)
        return resultado.json()
      })
      .then((datos) =>{
        this.movies = datos
        this.loading = false

      })

      .catch((error) =>{
        this.errorMsj = error
        this.loading = false
      });
    };
function getBooksByAuthor(){
    //falta url
    fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`)
    .then((resultado) => {
        if(!resultado.ok) throw new Error("Hay un error " + resultado.status + errorMsj)
        return resultado.json()
      })
      .then((datos) =>{
        this.movies = datos
        this.loading = false

      })

      .catch((error) =>{
        this.errorMsj = error
        this.loading = false
      });
    };

    export default getBooksByKeyWord;