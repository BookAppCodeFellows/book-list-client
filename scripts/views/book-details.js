var app = app || {};

(module => {
    
    const bookDetailPage = {};
    bookDetailPage.initBookDetailPage = (book) => {
        $('#book-author').text(book.author);
    }
    module.bookDetailPage = bookDetailPage;
})(app);