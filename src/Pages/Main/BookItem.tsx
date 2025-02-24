import React, { JSX } from "react";
import LinkItem from "./LinkItem";

interface BookItemProps {
  bookItemTitle: string;
  bookItemContent: JSX.Element;
  bookItemImage: string;
  bookItemLinksUK: LinkItem[];
  bookItemLinksUS: LinkItem[];
}

class BookItem extends React.Component<BookItemProps> {
  public constructor(props: BookItemProps) {
    super(props);
  }

  bookLinksUK: JSX.Element[] = [];
  bookLinksUS: JSX.Element[] = [];

  public render(): JSX.Element {
    this.props.bookItemLinksUK.forEach((linkItem) => {
      this.bookLinksUK.push(
        <div className="book-link">
          <a href={linkItem.link}>{linkItem.title}</a>
        </div>
      );
    });
    this.props.bookItemLinksUS.forEach((linkItem) => {
      this.bookLinksUS.push(
        <div className="book-link">
          <a href={linkItem.link}>{linkItem.title}</a>
        </div>
      );
    });
    return (
      <div className="book-item">
        <div className="main-book-content">
          <img
            src={this.props.bookItemImage}
            alt={this.props.bookItemTitle + " cover"}
          />
          <h3>{this.props.bookItemTitle}</h3>
          {this.props.bookItemContent}
        </div>
        <div className="book-links">
          {this.bookLinksUK}
          <br />
          {this.bookLinksUS}
        </div>
      </div>
    );
  }
}

export default BookItem;
