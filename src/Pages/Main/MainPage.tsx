import React, { useRef, useState } from "react";
import { Book } from "../../dtos/enums";
import BuyPopup from "../Buy/BuyPopup";
import BuyModal from "../BuyModal/BuyModal";
import HeaderMenu from "../Menu/HeaderMenu";
import BookItem from "./BookItem";
import BuyLinksUK from "../../dtos/BuyLinksUK";
import BuyLinksUS from "../../dtos/BuyLinksUS";
import GoodreadsWidget from "./Goodreads";
const whispers = require("../../images/book-covers/small/Whispers.png");
const blackwing = require("../../images/book-covers/small/Blackwing.png");
const trees = require("../../images/Trees.png");
const map = require("../../images/Seann Aite.png");
const arrow = require("../../images/Arrow.png");

const whispersDesc = (
  <p>
    Paid to unearth the fate of the children of the Three Willows, Fiadh expects
    the work of a predatory fey.
    <br />
    <br /> But this was a very different kind of monster who preyed upon the
    village folk. One that would leave her no choice but to journey into the
    wilderness beyond.
    <br />
    <br /> Experience an adventure in the world of Seann Àite, inspired by the
    myths and folklore of dark age Scotland.
    <br />
    <br /> The dialogue features sections written in the Scots language which is
    used throughout the series.
  </p>
);

const fullDesc = (
  <p>
    In a treacherous world filled with deception and distrust, Fiadh the Crow
    had plied her trade ridding the people of the Seann Àite of spirits and
    monsters.
    <br />
    <br />
    Beneath it all lies whispers in the dark leading men astray, whispers from a
    world beyond her own. Dark pacts are struck, and innocent souls are
    sacrificed for the promise of power from beyond.
    <br />
    <br />
    Far from home, Fiadh travels seeking answers gripping the fell blade
    Caerdrich. Together they journey the seas seeking revenge for the loss those
    whispers brought them so long ago.
  </p>
);

function MainPage() {
  const [selected, setSelected] = useState(false);
  const [mapClicked, setMapClicked] = useState(false);

  const buyElement = useRef<null | BuyPopup>(null);

  const onClick = async (book: Book) => {
    if (book !== Book.None) {
      await setSelected(true);
      if (buyElement.current == null) {
      } else {
        buyElement.current.setBook(book);
      }
    }
  };

  const onClose = () => {
    setSelected(false);
  };
  const openBuy = () => {
    onClick(Book.Whispers);
  };

  return (
    <div className="App">
      <div
        className={
          "main-page" + (selected || mapClicked ? " popup-active" : "")
        }
      >
        <script
          type="text/javascript"
          charSet="utf-8"
          src="https://www.goodreads.com/author/author_widget/20606471.Tristan_Gray?widget_id=1699907161"
        ></script>
        <HeaderMenu />
        <BuyModal onClick={openBuy} />
        <div className="series-title">
          <img src={trees} alt="Tales of the Seann Àite" />
          <h2>- Tales of the Seann Àite -</h2>
        </div>
        <div className="buy-direct">
          <img className="arrow arrow-one" src={arrow} alt="Arrow" />
          <a href="https://ko-fi.com/tristangray/shop">
            Click to Buy The Tales From Me Directly
          </a>
          <img className="arrow arrow-two" src={arrow} alt="Arrow" />
        </div>
        <div className="books">
          <BookItem
            bookItemContent={whispersDesc}
            bookItemTitle="Whispers To A Crow"
            bookItemImage={whispers}
            bookItemLinksUK={BuyLinksUK["Whispers"]}
            bookItemLinksUS={BuyLinksUS["Whispers"]}
          />
          <BookItem
            bookItemContent={fullDesc}
            bookItemTitle="Call of the Black Wing"
            bookItemImage={blackwing}
            bookItemLinksUK={BuyLinksUK["Call"]}
            bookItemLinksUS={BuyLinksUS["Call"]}
          />
          <div className="map-container">
            <h2>Map of Seann Àite</h2>
            <p>Click to see more</p>
            <button
              className={
                mapClicked ? "map-selected map-section" : "map-section"
              }
            >
              <img
                alt="map of Seann Àite"
                src={map}
                onClick={() => {
                  setMapClicked(!mapClicked);
                }}
              />
            </button>
          </div>
        </div>
        <GoodreadsWidget />
        {selected ? <BuyPopup onClose={onClose} ref={buyElement} /> : null}
      </div>
    </div>
  );
}

export default MainPage;
