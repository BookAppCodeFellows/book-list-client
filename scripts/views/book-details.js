var app = app || {};

(module => {
    
    const bookDetailPage = {};
    bookDetailPage.init = (book) => {
        $('#book-author').text(book.author);
    }
    module.bookDetailPage = bookDetailPage;
})(app);