var app = app || {};

(module => {

    const bookCreatePage = {};
    bookCreatePage.init = () => {
        $('#book-create-page').show();
    }

    $('#new-book-form').on('submit', (event) => {
        event.preventDefault();
        var bookData = {
            title: $('#create-title').val(),
            author: $('#create-author').val(),
            isnb: $('#create-isbn').val(),
            image_url: $('#create-image-url').val(),
            description: $('#create-description').val(),
        }
        app.Book.create(bookData).then(result => {
            console.log(result);
            page('/');
        })
        $('#create-title').val('');
        $('#create-author').val('');
        $('#create-isbn').val('');
        $('#create-image-url').val('');
        $('#create-description').val('');
    })

    module.bookCreatePage = bookCreatePage;
})(app);