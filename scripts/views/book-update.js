var app = app || {};

(module => {

    const bookUpdatePage = {};
    bookUpdatePage.init = () => {
        $('#book-update-page').show();
    }

    $('#update-book-form').on('click', 'button', (event) => {
        console.log('update submit clicked')
        var bookData = {
            id: $('#update-btn').attr('data-id'),
            title: $('#update-title').val(),
            author: $('#update-author').val(),
            isnb: $('#update-isbn').val(),
            image_url: $('#update-image-url').val(),
            description: $('#update-description').val(),
        }
        console.log(bookData)
        app.Book.update(bookData).then(result => {
            console.log(result);
            page('/');
        })
        event.preventDefault();
    })

    module.bookUpdatePage = bookUpdatePage;
})(app);