var app = app || {};

(module => {
  const bookListPage = {}

  bookListPage.init = (books) => {
    $('#book-list').empty();
    books.forEach(book => {
        $('#book-list').append(`<li data-id="${book.id}">${book.title}`);
    })
    $('#book-list').on('click', 'li', event => {
        let = bookId = $(event.target).data('id');
        page(`/books/${bookId}`);
    })
    $('#book-list-page').show();
  }
  
  module.bookListPage = bookListPage;
})(app);