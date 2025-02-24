import React, { JSX } from "react";
import { Book } from "../../dtos/enums";
import BuyLinksUK from "../../dtos/BuyLinksUK";
import BuyLinksUS from "../../dtos/BuyLinksUS";
const uk = require("../../images/logos/UK Flag.png");
const usa = require("../../images/logos/USA Flag.png");
const amazon = require("../../images/logos/Amazon logo.png");
const bandn = require("../../images/logos/BandN.png");
const kobo = require("../../images/logos/Kobo-logo.png");
const apple = require("../../images/logos/Apple Books Logo.png");
const ebooks = require("../../images/logos/eBooks.png");
const waterstones = require("../../images/logos/Waterstones.png");

interface BuyPopupProps {
  onClose: Function;
}

enum Region {
  None,
  UK,
  USA,
}

enum Retailer {
  Amazon,
  BarnesAndNoble,
  Kobo,
  AppleBooks,
  eBooks,
  Waterstones,
}

interface BuyPopupState {
  selectedRegion: boolean;
  regionSelected: Region;
  bookSelected: Book;
}

class BuyPopup extends React.Component<BuyPopupProps, BuyPopupState> {
  public constructor(props: BuyPopupProps) {
    super(props);
    this.onClose = this.onClose.bind(this);

    this.state = {
      selectedRegion: false,
      regionSelected: Region.None,
      bookSelected: Book.None,
    };
  }

  public render(): JSX.Element {
    return (
      <>
        <div className="popup-wrapper">
          <div className="regions">
            {this.state.selectedRegion ? (
              <>
                <h2>Select Your Retailer</h2>
                <div
                  className="retailer"
                  onClick={() => this.onGoToRetailer(Retailer.Amazon)}
                >
                  <img src={amazon} alt="Amazon" />
                </div>
                {this.state.regionSelected === Region.USA && (
                  <div
                    className="retailer"
                    onClick={() => this.onGoToRetailer(Retailer.BarnesAndNoble)}
                  >
                    <img src={bandn} alt="Barnes and Noble" />
                  </div>
                )}
                <div
                  className="retailer"
                  onClick={() => this.onGoToRetailer(Retailer.Kobo)}
                >
                  <img src={kobo} alt="Kobo" />
                </div>
                <div
                  className="retailer"
                  onClick={() => this.onGoToRetailer(Retailer.AppleBooks)}
                >
                  <img src={apple} alt="Apple Books" />
                </div>
                <div
                  className="retailer"
                  onClick={() => this.onGoToRetailer(Retailer.eBooks)}
                >
                  <img src={ebooks} alt="eBooks.com" />
                </div>
                {this.state.regionSelected === Region.UK && (
                  <div
                    className="retailer"
                    onClick={() => this.onGoToRetailer(Retailer.Waterstones)}
                  >
                    <img src={waterstones} alt="Waterstones" />
                  </div>
                )}
              </>
            ) : (
              <>
                <h2>Select Your Region</h2>
                <div
                  className="region scot"
                  onClick={() => this.onSelect(Region.UK)}
                >
                  <img src={uk} alt="United Kingdom" />
                </div>
                <div
                  className="region"
                  onClick={() => this.onSelect(Region.USA)}
                >
                  <img src={usa} alt="United States" />
                </div>
              </>
            )}
            <button className="close-button" onClick={this.onClose}>
              Close
            </button>
          </div>
        </div>
      </>
    );
  }

  private onSelect(region: Region): void {
    this.setState({
      regionSelected: region,
      selectedRegion: true,
    });
  }

  private onGoToRetailer(retailer: Retailer): void {
    switch (this.state.regionSelected) {
      case Region.UK:
        switch (retailer) {
          case Retailer.Amazon:
            switch (this.state.bookSelected) {
              case Book.Whispers:
                window.open(BuyLinksUK["Whispers"][0].link, "_blank");
                break;
              case Book.Names:
                window.open(BuyLinksUK["Names"][0].link, "_blank");
                break;
              case Book.Gift:
                window.open(BuyLinksUK["Gift"][0].link, "_blank");
                break;
              case Book.Thread:
                window.open(BuyLinksUK["Thread"][0].link, "_blank");
                break;
              case Book.Eyes:
                window.open(BuyLinksUK["Eyes"][0].link, "_blank");
                break;
            }
            break;
          case Retailer.Kobo:
            switch (this.state.bookSelected) {
              case Book.Whispers:
                window.open(BuyLinksUK["Whispers"][1].link, "_blank");
                break;
              case Book.Names:
                window.open(BuyLinksUK["Names"][1].link, "_blank");
                break;
              case Book.Gift:
                window.open(BuyLinksUK["Gift"][1].link, "_blank");
                break;
              case Book.Thread:
                window.open(BuyLinksUK["Thread"][1].link, "_blank");
                break;
            }
            break;
          case Retailer.AppleBooks:
            switch (this.state.bookSelected) {
              case Book.Whispers:
                window.open(BuyLinksUK["Whispers"][2].link, "_blank");
                break;
              case Book.Names:
                window.open(BuyLinksUK["Names"][2].link, "_blank");
                break;
              case Book.Gift:
                window.open(BuyLinksUK["Gift"][2].link, "_blank");
                break;
              case Book.Thread:
                window.open(BuyLinksUK["Thread"][2].link, "_blank");
                break;
            }
            break;
          case Retailer.Waterstones:
            switch (this.state.bookSelected) {
              case Book.Whispers:
                window.open(BuyLinksUK["Whispers"][3].link, "_blank");
                break;
              case Book.Names:
                window.open(BuyLinksUK["Names"][3].link, "_blank");
                break;
              case Book.Gift:
                window.open(BuyLinksUK["Gift"][3].link, "_blank");
                break;
              case Book.Thread:
                window.open(BuyLinksUK["Thread"][3].link, "_blank");
                break;
            }
            break;
          case Retailer.eBooks:
            switch (this.state.bookSelected) {
              case Book.Whispers:
                window.open(BuyLinksUK["Whispers"][4].link, "_blank");
                break;
              case Book.Names:
                window.open(BuyLinksUK["Names"][4].link, "_blank");
                break;
              case Book.Gift:
                window.open(BuyLinksUK["Gift"][4].link, "_blank");
                break;
              case Book.Thread:
                window.open(BuyLinksUK["Thread"][4].link, "_blank");
                break;
            }
            break;
        }
        break;
      case Region.USA:
        switch (retailer) {
          case Retailer.Amazon:
            switch (this.state.bookSelected) {
              case Book.Whispers:
                window.open(BuyLinksUS["Whispers"][0].link, "_blank");
                break;
              case Book.Names:
                window.open(BuyLinksUS["Names"][0].link, "_blank");
                break;
              case Book.Gift:
                window.open(BuyLinksUS["Gift"][0].link, "_blank");
                break;
              case Book.Thread:
                window.open(BuyLinksUS["Thread"][0].link, "_blank");
                break;
              case Book.Eyes:
                window.open(BuyLinksUS["Eyes"][0].link, "_blank");
                break;
            }
            break;
          case Retailer.BarnesAndNoble:
            switch (this.state.bookSelected) {
              case Book.Whispers:
                window.open(BuyLinksUS["Whispers"][1].link, "_blank");
                break;
              case Book.Names:
                window.open(BuyLinksUS["Names"][1].link, "_blank");
                break;
              case Book.Gift:
                window.open(BuyLinksUS["Gift"][1].link, "_blank");
                break;
              case Book.Thread:
                window.open(BuyLinksUS["Thread"][1].link, "_blank");
                break;
            }
            break;
          case Retailer.Kobo:
            switch (this.state.bookSelected) {
              case Book.Whispers:
                window.open(BuyLinksUS["Whispers"][2].link, "_blank");
                break;
              case Book.Names:
                window.open(BuyLinksUS["Names"][2].link, "_blank");
                break;
              case Book.Gift:
                window.open(BuyLinksUS["Gift"][2].link, "_blank");
                break;
              case Book.Thread:
                window.open(BuyLinksUS["Thread"][2].link, "_blank");
                break;
            }
            break;
          case Retailer.AppleBooks:
            switch (this.state.bookSelected) {
              case Book.Whispers:
                window.open(BuyLinksUS["Whispers"][3].link, "_blank");
                break;
              case Book.Names:
                window.open(BuyLinksUS["Names"][3].link, "_blank");
                break;
              case Book.Gift:
                window.open(BuyLinksUS["Gift"][3].link, "_blank");
                break;
              case Book.Thread:
                window.open(BuyLinksUS["Thread"][3].link, "_blank");
                break;
            }
            break;
          case Retailer.eBooks:
            switch (this.state.bookSelected) {
              case Book.Whispers:
                window.open(BuyLinksUS["Whispers"][4].link, "_blank");
                break;
              case Book.Names:
                window.open(BuyLinksUS["Names"][4].link, "_blank");
                break;
              case Book.Gift:
                window.open(BuyLinksUS["Gift"][4].link, "_blank");
                break;
              case Book.Thread:
                window.open(BuyLinksUS["Thread"][4].link, "_blank");
                break;
            }
        }
        break;
    }
  }

  private onClose(): void {
    this.props.onClose();
  }

  public setBook(book: Book): void {
    this.setState({ bookSelected: book });
  }
}

export default BuyPopup;
