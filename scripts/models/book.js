var app = app || {};

(module = > {
    const __API_URL__ = 'https://dk-rm-nd-booklist.herokuapp.com/api/v1/books';
    //const __API_URL__ = 'http:localhost:3000/api/v1/books';
    
    function Book() {

    }

    Book.all = [];

    Book.fetchAll = () => $.getJSON(__API_URL__);

    Book.fetchOne = (id) => $getJSON(`__API_URL__/${id}`);
        
    module.Book = Book;

})(app);
