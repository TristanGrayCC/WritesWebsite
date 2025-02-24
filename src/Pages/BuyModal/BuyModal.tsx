import React, { JSX } from "react";

const whispers = require("../../images/book-covers/small/Whispers.png");

interface BuyModalProps {
  onClick: Function;
}

class BuyModal extends React.Component<BuyModalProps> {
  public constructor(props: BuyModalProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  public render(): JSX.Element {
    return (
      <div className="buy-modal" onClick={this.onClick}>
        <h2>Buy Now</h2>
        <img src={whispers} alt="Whispers of a Crow Cover" />
        <h3>£0.99/$0.99</h3>
      </div>
    );
  }

  public onClick(): void {
    this.props.onClick();
  }
}

export default BuyModal;
