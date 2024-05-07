import React, { useRef, useState } from "react";
import { Book } from "../../dtos/enums";
import BuyPopup from "../Buy/BuyPopup";
import BuyModal from "../BuyModal/BuyModal";
import HeaderMenu from "../Menu/HeaderMenu";
import BookItem from "./BookItem";
import BuyLinksUK from "../../dtos/BuyLinksUK";
import BuyLinksUS from "../../dtos/BuyLinksUS";
import GoodreadsWidget from "./Goodreads";
const whispers = require("../../images/book-covers/small/Whispers.png")
const names = require("../../images/book-covers/small/Names.png")
const gift = require("../../images/book-covers/small/Gift.png")
const thread = require("../../images/book-covers/small/Thread.png")
const eyes = require("../../images/book-covers/small/Eyes.png")
const raven = require("../../images/book-covers/small/Raven.jpg")
const trees = require("../../images/Trees.png")
const map = require("../../images/Seann Aite.png")
const arrow = require("../../images/Arrow.png")

const whispersDesc = <p>Paid to unearth the fate of the children of the Three Willows, Fiadh expects the work of a predatory fey.<br /><br /> But this was a very different kind of monster who preyed upon the village folk. One that would leave her no choice but to journey into the wilderness beyond.<br /><br /> Experience an adventure in the world of Seann Àite, inspired by the myths and folklore of dark age Scotland.<br /><br /> The dialogue features sections written in the Scots language which is used throughout the series.</p>

const namesDesc = <p>Years after her discoveries at the village of Three Willows Fiadh returns to the island of Ghav Rhien.<br /><br /> An old friend calls for her aid as the last chance to save the haunted lord of the isle from the shadows that torment him in the night.<br /><br /> A spirit from across the sea has come to Seann Àite, and Fiadh must revisit her own past to solve the mystery behind the names of the dead.</p>

const giftDesc = <p>Continuing her travels along the coast of Seann Àite, Fiadh continues to ply her trade facing dangers of magical and monstrous origin for those who can pay.<br /><br /> Now pursued by a shadowy order and with a new companion at her side, Fiadh has a chance to unveil some of the secrets of her past.<br /><br /> But to leave Fiadh must make a deal with the sea itself to survive and return to land bearing a relic of another age.</p>

const four = <p>A butcher haunts the crags over Kempe Fell. A being from another time and another place, hunting for a spirit that is no longer here.<br /><br />Fiadh and Annis must brave the dealings and secrets of a house long lost to time, and somehow find a way to placate the monster that awaits their return. All the while Fiadh continues to search for those who cast her from the cliffs of Tur Eumor.<br /><br />Both lie deep within the halls of Kempe Fell.</p>

const five = <p>Long ago the gods of Seann Àite departed the world in the midst of a great battle fought high in the mountains above the Giants' Stair. Now that tale will be told by a diminutive storyteller, as Fiadh and Annis seek the only way to find the Red Raven - a wish.<br /><br /> Accompanied by companions from the crew of her host Fiadh will climb in search of one of the few beings capable of granting her what she needs. All the while, the cracks of her long and gruelling journey begin to show. </p>

const six = <p>For years Fiadh has been waiting for this moment, the chance to finally confront the Red Raven and grasp revenge for the destruction she inflicted on Tur Eumor.<br /><br />Now, finally, she will meet her in person, with Annis at her side.<br /><br />But the hidden isle is filled with danger and the blade at her back hungers for more than her vengeance.</p>

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
    }

    const onClose = () => {
        setSelected(false);
    }
    const openBuy = () => {
        onClick(Book.Whispers);
    }
    
    return (<div className="App">
        <div className={"main-page" + (selected || mapClicked ? " popup-active" : "" )} >
        <script type="text/javascript" charSet="utf-8" src="https://www.goodreads.com/author/author_widget/20606471.Tristan_Gray?widget_id=1699907161"></script>
            <HeaderMenu />
            <BuyModal onClick={openBuy}/>
            <div className="series-title">
                <img src={ trees } alt="Tales of the Seann Àite"/>
                <h2>- Tales of the Seann Àite -</h2>
            </div>
            <div className="buy-direct">
                <img className="arrow arrow-one" src={ arrow } alt="Arrow"/>
                <a href="https://ko-fi.com/tristangray/shop">Click to Buy The Tales From Me Directly</a>
                <img className="arrow arrow-two" src={ arrow } alt="Arrow"/>
            </div>
            <div className="books">
                <BookItem bookItemContent={whispersDesc} bookItemTitle="Whispers To A Crow" bookItemImage={whispers} book={Book.Whispers} bookItemLinksUK={BuyLinksUK["Whispers"]} bookItemLinksUS={BuyLinksUS["Whispers"]}/>
                <BookItem bookItemContent={namesDesc} bookItemTitle="Names of the Dead" bookItemImage={names} book={Book.Names} bookItemLinksUK={BuyLinksUK["Names"]} bookItemLinksUS={BuyLinksUS["Names"]} />
                <BookItem bookItemContent={giftDesc} bookItemTitle="A Gift of the Sea" bookItemImage={gift} book={Book.Gift} bookItemLinksUK={BuyLinksUK["Gift"]} bookItemLinksUS={BuyLinksUS["Gift"]} />
                <BookItem bookItemContent={four} bookItemTitle="The Woven Thread" bookItemImage={thread} book={Book.Thread}  bookItemLinksUK={BuyLinksUK["Thread"]} bookItemLinksUS={BuyLinksUS["Thread"]}/>
                <BookItem bookItemContent={five} bookItemTitle="Eyes of Gold" bookItemImage={eyes} book={Book.Eyes}  bookItemLinksUK={BuyLinksUK["Eyes"]} bookItemLinksUS={BuyLinksUS["Eyes"]}/>
                <BookItem bookItemContent={six} bookItemTitle="The Red Raven" bookItemImage={raven} book={Book.Raven} bookItemLinksUK={BuyLinksUK["Raven"]} bookItemLinksUS={BuyLinksUS["Raven"]}/>
            </div>
            <GoodreadsWidget/>
            
            <h2>Map of Seann Àite</h2>
            <p>Click to see more</p>
            <button className={mapClicked ? "map-selected map-section" : "map-section"}>
                <img alt="map of Seann Àite" src={map} onClick={() => {setMapClicked(!mapClicked)}} />
            </button>
            {selected ? <BuyPopup onClose={onClose} ref={buyElement} /> : null}
            </div>
    </div>)
}

export default MainPage;