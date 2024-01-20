const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}


//Destructuring
const book = getBook(3);
// const title = book.title;
// const author = book.author;
const {title, author, pages, publicationDate, genres, hasMovieAdaptation} = book;
//console.log(title, author, genres)




//Destructuring arrays
//Rest Operator
//...otherGenres recoge todos los géneros restantes que no se recogieron en las variables primary y secondary.
const [primary, secondary, ...otherGenres] = genres;
//console.log(otherGenres);




//Spread Operator
//descompone el array genres en elementos individuales, que luego se combinan con el string "epic fantasy" para crear un nuevo array.
const newGenres = [...genres, "epic fantasy"];
//console.log(newGenres)

const updatedBook = {
  ...book, 
  //agregar una nueva propiedad
  moviePublicationDate: "2001-12-19", 

  //sobreescribir una propiedad que ya existe
  pages: 1210
}
//console.log(updatedBook)



//Template literals
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${publicationDate.split('-')[0]}`;
// console.log(summary); 




//Ternarie Operator
//consta de tres partes o operandos, la primera es la condicion, la segunda es los que hara si la condicion es verdadera y la tercera parte es que hara si la condicion es falsa
const pagesRange = pages > 1000 ? 'Mas de mill' : 'menos de mil';
//console.log(pagesRange);





//Arrow functions
// function getYear(str) {
//   return str.split('-')[0];
// }

// const getYear = (str) => {
//   return str.aplit('-')[0];
// }

const getYear = str => str.split('-')[0];
//console.log(getYear(publicationDate));





//Optional Chaining
//permite leer de manera segura propiedades anidadas de objetos sin tener que validar cada referencia intermedia. Se utiliza la sintaxis ?. para hacer esto.
function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;

  return goodread + librarything;
}
const count = getTotalReviewCount(book);
//console.log(count)





// Map Method
//El método map() en JavaScript se utiliza para crear un nuevo array con los resultados de la llamada a una función proporcionada en cada elemento del array original.
const books = getBooks();
const duplicate = [1,2,3,4,5].map((el) => el * 2);
//console.log(duplicate)

const titles = books.map(book => book.title )
//console.log(titles);

const essentialData = books.map(book =>  ({
      title: book.title,
      author: book.author,
      reviewsCount: getTotalReviewCount(book)
    })
  );
//console.log(essentialData);





//Filter Method
//El método filter() en JavaScript crea un nuevo array con todos los elementos que pasan una prueba implementada por la función proporcionada.
const longBooks = books
  .filter(book => book.pages > 500)
  .filter(book => book.hasMovieAdaptation);
// console.log(longBooks);

const adventureBooks = books
.filter(book => book.genres.includes("adventure"))
.map(book => book.title);
//console.log(adventureBooks);






//Reduce Method
//El método reduce() en JavaScript se utiliza para aplicar una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un solo valor.
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
//console.log(pagesAllBooks);




//Sort Method
//El método sort() en JavaScript se utiliza para ordenar los elementos de un array en su lugar y devuelve el array. La ordenación no es necesariamente estable. La sintaxis predeterminada convierte los elementos a strings y los compara secuencia por secuencia de unidades de código UTF-16. Muta al arreglo orginial
const x = [5,6,0,4,1,54,6,88];
const sorted = x.slice().sort((a, b) => a - b);
// console.log(sorted);
// console.log(x);

const sortedbyPages = books.slice().sort((a, b) => b.pages - a.pages);
//console.log(sortedbyPages);





// Tecnicas para trabajar con arrays sin mutarlos
// Trabajar con arrays sin mutarlos es una práctica común en la programación funcional y es especialmente útil en JavaScript cuando se trabaja con bibliotecas como React, donde la mutación directa del estado puede llevar a comportamientos inesperados.

// 1.- Agregar un libro al array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
}

const booksAfterAdd = [...books, newBook];
//console.log(booksAfterAdd);

// 2.- Eliminar un libro del array
const booksAfterDelete = booksAfterAdd.filter(book => book.id !== 3);
//console.log(booksAfterDelete);

// Actualizar un libro del array
const booksAfterUpdate = booksAfterDelete.map(book => 
  book.id === 1 ? {...book , title : "ejemplo"} : book);
//console.log(booksAfterUpdate)






// Promises
fetch("https://jsonplaceholder.typicode.com/users")
  .then( res => res.json())
  //.then(data => console.log(data));





// Async/Await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json()
  //console.log(data);
  return data;
}

const todos = getTodos();
console.log(todos)