function GoodreadsWidget() {
  return (
    <div className="goodreads">
      <a
        className="gr_title"
        style={{ fontSize: "1.3em", color: "#382110", textDecoration: "none" }}
        href="https://www.goodreads.com/author/show/20606471.Tristan_Gray?utm_medium=api&utm_source=author_widget"
      >
        Goodreads Reviews
      </a>
      <div id="gr_author_widget_1699907161">
        <div className="gr_container">
          <div className="gr_book_container">
            <a
              title="Whispers to a Crow (Tales of the Seann Àite #1)"
              className="gr_book_image"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/55061225-whispers-to-a-crow?utm_medium=api&utm_source=author_widget"
            >
              <img
                alt="Whispers to a Crow"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598076066l/55061225._SY75_.jpg"
              />
            </a>
            <a
              className="gr_book_title"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/55061225-whispers-to-a-crow?utm_medium=api&utm_source=author_widget"
            >
              Whispers to a Crow (#1)
            </a>
            <br />
            <div className="gr_review_stats">
              reviews: 85
              <br />
              ratings: 132 <br />
              (avg rating 3.93)
            </div>
          </div>
          <div className="gr_book_container">
            <a
              title="Call of the Black Wing"
              className="gr_book_image"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/216300112-call-of-the-black-wing? utm_medium=api&utm_source=author_widget"
            >
              <img
                alt="Call of the Black Wing"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1720560974i/216300112._SY75_.jpg"
              />
            </a>
            <a
              className="gr_book_title"
              rel="nofollow"
              href="https://www.goodreads.com/book/show/216300112-call-of-the-black-wing?utm_medium=api&utm_source=author_widget"
            >
              Call of the Black Wing
            </a>
            <br />
            <div className="gr_review_stats">
              reviews: 14
              <br />
              ratings: 29 <br />
              (avg rating 4.59)
            </div>
          </div>
        </div>
      </div>
      <div id="goodreads-widget">
        <div id="gr_header">
          <h1>
            <a
              rel="nofollow"
              href="https://www.goodreads.com/book/show/55061225-whispers-to-a-crow"
            >
              Goodreads reviews for Whispers to a Crow
            </a>
          </h1>
        </div>
        <iframe
          title="the_iframe"
          src="https://www.goodreads.com/api/reviews_widget_iframe?did=DEVELOPER_ID&format=html&header_text=Goodreads+reviews+for+Whispers+to+a+Crow&isbn=1838485406&links=660&review_back=fff&stars=000&text=000"
          width="565"
          height="400"
        ></iframe>
        <div id="gr_footer">
          <a
            className="gr_branding"
            target="_blank"
            rel="nofollow noopener noreferrer"
            href="https://www.goodreads.com/book/show/55061225-whispers-to-a-crow?utm_medium=api&utm_source=reviews_widget"
          >
            Reviews from Goodreads.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default GoodreadsWidget;
