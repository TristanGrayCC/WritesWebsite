import type { ReactElement } from 'react';
import { LinkItem } from './LinkItem';
interface BookItemProps {
  bookItemTitle: string;
  bookItemContent: ReactElement;
  bookItemImage: string;
  bookItemLinksUK: LinkItem[];
  bookItemLinksUS: LinkItem[];
}

export const BookItem = (props: BookItemProps): ReactElement => {

  const bookLinksUK = Array<ReactElement>();
  const bookLinksUS = Array<ReactElement>();

    props.bookItemLinksUK.forEach((item) => {
      bookLinksUK.push(
        <div className="book-link">
          <a href={item.link}>{item.title}</a>
        </div>
      );
    });
    props.bookItemLinksUS.forEach((item) => {
      bookLinksUS.push(
        <div className="book-link">
          <a href={item.link}>{item.title}</a>
        </div>
      );
    });
    return (
      <div className="book-item">
        <div className="main-book-content">
          <img
            src={props.bookItemImage}
            alt={props.bookItemTitle + " cover"}
          />
          <h3>{props.bookItemTitle}</h3>
          {props.bookItemContent}
        </div>
        <div className="book-links">
          {bookLinksUK}
          <br />
          {bookLinksUS}
        </div>
      </div>
    );
}
