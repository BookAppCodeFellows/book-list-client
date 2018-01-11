page('/*', (ctx, next) => {
  $('.page').hide();
  next();
});

page('/', () => {
  $('.page').hide();
  app.Book.fetchAll().then(books => {
    app.bookListPage.initIndexPage(books);
    $('#book-list-page').show();
  })
  // fetch data for all books
  // convert raw data into Book instance
  // populate list with boooks
  // handlebars template per book
})

page('/books/:id', (ctx) => {
  $('.page').hide()

  app.Book.fetchOne(ctx.params.id).then(book => {
    app.bookDetailPage.initDetailPage(book);
    $('#book-detail-page').show();
  });

  $('#book-crate-page').show();
});

page('/books/create', () => {
  $('.page').hide();
  $('#book-create-page').show();
});

page('/error', () => {
  $('.page').hide();
  $('#error-page').show();
});

page.start();