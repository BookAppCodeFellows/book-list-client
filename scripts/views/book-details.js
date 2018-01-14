var app = app || {};

(module => {
        
    const bookDetailPage = {};
    bookDetailPage.init = (book) => {
        $('#book-detail-page').show();
        $('#update-book-form').hide();
        $('#book-author').text(book.author);

        let book_id = book.id;
        $('#update-btn').attr('data-id', book_id);
        $('#update-title').val(book.title);
        $('#update-author').val(book.author);
        $('#update-isbn').val(book.isbn);
        $('#update-image-url').val(book.image_url);
        $('#update-description').val(book.description);
        
        $('#delete-btn').off().on('click', () => {
            var r = confirm('Are you sure you want to delete this book?') 
            if (r == true) {app.Book.delete(book_id).then(result => {
                    console.log(result);
                    page('/');
                })
            } else {
                console.log('Delete cancelled');
                page('/');
            }
        })
    }

    $('#update-btn').one('click', () =>  {
        $('#update-book-form').show();
    })

    module.bookDetailPage = bookDetailPage;
})(app);