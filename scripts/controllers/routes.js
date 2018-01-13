page('/*', (ctx, next) => {
  $('.page').hide();
  next();
});

page('/', () => {
  app.Book.fetchAll().then(books => {
    app.bookListPage.init(books);
  })
})

page('/books/:id', (ctx) => {
  $('.page').hide()

  app.Book.fetchOne(ctx.params.id).then(book => {
    app.bookDetailPage.init(book);
    $('#book-detail-page').show();
  });

  $('#book-crate-page').show();
});

page('/new', () => {
  app.bookCreatePage.init();
});

page('/error', () => {
  $('.page').hide();
  $('#error-page').show();
});

page.start();