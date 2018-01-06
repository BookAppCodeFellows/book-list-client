const __API_URL__ = 'https://dk-rm-nd-booklist.herokuapp.com/test';
// const __API_URL__ = 'http:localhost:3000/test';

$.getJSON(__API_URL__)
.then(result => {
    result.send(result);
}).catch(error => console.error(error));