import React, { useRef, useState } from "react";
import { Book } from "../../dtos/enums";
import BuyPopup from "../Buy/BuyPopup";
import HeaderMenu from "../Menu/HeaderMenu";
import BookItem from "./BookItem";
const whispers = require("../../images/Portrait Whispers.png")
const names = require("../../images/Names of the Dead.png")
const gift = require("../../images/A Gift of the Sea.png")
const thread = require("../../images/The Woven Thread.png")
const talesBlock = require("../../images/Tales Block.png")
const question = require("../../images/Question.png")
const map = require("../../images/Seann Aite.png")

const whispersDesc = <p>Paid to unearth the fate of the children of the Three Willows, Fiadh expects the work of a predatory fey.<br /><br /> But this was a very different kind of monster who preyed upon the village folk. One that would leave her no choice but to journey into the wilderness beyond.<br /><br /> Experience an adventure in the world of Seann Àite, inspired by the myths and folklore of dark age Scotland.<br /><br /> The dialogue features sections written in the Scots language which is used throughout the series.</p>

const namesDesc = <p>Years after her discoveries at the village of Three Willows Fiadh returns to the island of Ghav Rhien.<br /><br /> An old friend calls for her aid as the last chance to save the haunted lord of the isle from the shadows that torment him in the night.<br /><br /> A spirit from across the sea has come to Seann Àite, and Fiadh must revisit her own past to solve the mystery behind the names of the dead.</p>

const giftDesc = <p>Continuing her travels along the coast of Seann Àite, Fiadh continues to ply her trade facing dangers of magical and monstrous origin for those who can pay.<br /><br /> Now pursued by a shadowy order and with a new companion at her side, Fiadh has a chance to unveil some of the secrets of her past.<br /><br /> But to leave Fiadh must make a deal with the sea itself to survive and return to land bearing a relic of another age.</p>

const four = <p>A butcher haunts the crags over Kempe Fell. A being from another time and another place, hunting for a spirit that is no longer here.<br /><br />Fiadh and Annis must brave the dealings and secrets of a house long lost to time, and somehow find a way to placate the monster that awaits their return. All the while Fiadh continues to search for those who cast her from the cliffs of Tur Eumor.<br /><br />Both lie deep within the halls of Kempe Fell.</p>

const five = <p>The Fifth Tale. The tale of Caerdrich will be told by a diminuative storyteller, as Fiadh and Annis seek the only way to find the Red Raven - A wish.</p>

const six = <p>The Sixth and final tale. Fiadh finally travels to confront the one who burned her home long ago. Here, at last, she and Caerdrich will have their vengeance.</p>

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
    
    return (<div className="App">
        <div className="main-page">
            <HeaderMenu />
            <h1>Tristan Gray</h1>
            <img className="series-title" src={ talesBlock } alt="Tales of Seann Àite"/>
            <div className="books">
                <BookItem bookItemContent={whispersDesc} bookItemTitle="Whispers To A Crow" bookItemImage={whispers} onClick={onClick} book={Book.Whispers} />
                <BookItem bookItemContent={namesDesc} bookItemTitle="Names of the Dead" bookItemImage={names} onClick={onClick} book={Book.Names} />
                <BookItem bookItemContent={giftDesc} bookItemTitle="A Gift of the Sea" bookItemImage={gift} onClick={onClick} book={Book.Gift} />
                <BookItem bookItemContent={four} bookItemTitle="The Woven Thread" bookItemImage={thread} onClick={onClick} book={Book.Thread} />
                <BookItem bookItemContent={five} bookItemTitle="Tale No. 5" bookItemImage={question} onClick={onClick} book={Book.None} />
                <BookItem bookItemContent={six} bookItemTitle="Tale No. 6" bookItemImage={question} onClick={onClick} book={Book.None} />
            </div>
            <h2>Map of Seann Àite</h2>
            <p>Click to see more</p>
            <div className={mapClicked ? "map-selected map-section" : "map-section"}>
                <img alt="map of Seann Àite" src={map} onClick={() => {setMapClicked(!mapClicked)}} />
            </div>
            {selected ? <BuyPopup onClose={onClose} ref={buyElement} /> : null}
            </div>
    </div>)
}

export default MainPage;