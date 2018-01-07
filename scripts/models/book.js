const __API_URL__ = 'https://dk-rm-nd-booklist.herokuapp.com/api/v1/books';
//const __API_URL__ = 'http:localhost:3000/test';

$.getJSON(__API_URL__)
.then(result => {
    $('#number-books').append(`Total: (${result.length})`);
    result.forEach(book => {
        $('#booklist').append(`Title: ${book.title} By: ${book.author}`);
        console.log(result);
    })
}).catch(error => console.error(error));