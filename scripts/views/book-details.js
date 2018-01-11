var app = app || {};

(module => {
    
    const bookDetailPage = {};
    bookDetailPage.initDetailPage = (book) => {
        $('#book-author').text(book.author);
    }
    module.bookDetailPage = bookDetailPage;
})(app);