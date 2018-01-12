var app = app || {};

(module => {

    const bookCreatePage = {};
    bookCreatePage.init = () => {
        $('#book-create-page').show();
    }

    $('#new-book-form').on('submit', (event) => {
        event.preventDefault();
        var bookData = {
            title: $('#title').val(),
            author: $('#author').val(),
            isnb: $('#isbn').val(),
            image_url: $('#image-url').val(),
            description: $('#description').val(),
        }
        app.Book.create(bookData).then(result => {
            console.log(result);
            page('/');
        })
        $('#title').val('');
        $('#author').val('');
        $('#isbn').val('');
        $('#image-url').val('');
        $('#description').val('');
    })

    module.bookCreatePage = bookCreatePage;
})(app);