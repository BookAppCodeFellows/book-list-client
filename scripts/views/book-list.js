var app = app || {};

(module => {
  const bookListPage = {}

  bookListPage.init = (books) => {
    console.log(books)
    $('#book-list').empty();
    
    let bookSource = $('#book-template').html();
    let template = Handlebars.compile(bookSource);

    books.forEach(book => {
        $('#book-list').append(template(book));
    })
    $('#view-details').on('click', event => {
        let = bookId = $(event.target).data('id');
        page(`/books/${bookId}`);
    })
    $('#book-list-page').show();
  }
  
  module.bookListPage = bookListPage;
})(app);