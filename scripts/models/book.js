const __API_URL__ = 'https://dk-rm-nd-booklist.herokuapp.com/test';
//const __API_URL__ = 'http:localhost:3000/test';

$.get(__API_URL__)
.then(result => {
    console.log(result);
}).catch(error => console.error(error));