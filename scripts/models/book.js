const __API_URL__ = 'https://dk-rm-nd-booklist.herokuapp.com/api/v1/books';
//const __API_URL__ = 'http:localhost:3000/test';

$.getJSON(__API_URL__)
.then(result => {
    result.forEach(book => {
        $('#booklist').append(`Title: ${book.title} By: ${book.author}`);
        console.log(book.title, book.author);
    })
}).catch(error => console.error(error));