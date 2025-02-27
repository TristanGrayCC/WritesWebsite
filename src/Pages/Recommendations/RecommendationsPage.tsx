import HeaderMenu from "../Menu/HeaderMenu";
import Swiper from "./Swiper";
import dragonbone from "../../images/recommendations/Dragonbone Chair.jpg";
import magician from "../../images/recommendations/Magician.jpg";
import nightwatch from "../../images/recommendations/Night Watch.jpg";
import fifthseason from "../../images/recommendations/Fifth Season.jpg";
import bonewitch from "../../images/recommendations/Bone Witch.jpg";
import daughter from "../../images/recommendations/Daughter of the Empire.jpg";
import lastwish from "../../images/recommendations/The Last Wish.jpg";
import gideon from "../../images/recommendations/Gideon.jpg";
import priory from "../../images/recommendations/Priory.jpg";
import hades from "../../images/recommendations/Hades.jpeg";

import monstress from "../../images/recommendations/Monstress.jpg";
import die from "../../images/recommendations/DIE.jpg";
import highesthouse from "../../images/recommendations/Highest House.jpg";
import coda from "../../images/recommendations/CODA.jpg";
import isola from "../../images/recommendations/Isola.jpg";
import sandman from "../../images/recommendations/Sandman.jpg";
import reaver from "../../images/recommendations/Reaver.jpg";
import ratqueens from "../../images/recommendations/Rat Queens.jpg";

import horizon from "../../images/recommendations/Horizon.jpg";
import journey from "../../images/recommendations/Journey.jpg";
import hollow from "../../images/recommendations/Hollow Knight.png";
import witcher from "../../images/recommendations/Witcher 3.jpg";
import godofwar from "../../images/recommendations/God of War.jpg";
import hellblade from "../../images/recommendations/Hellblade.jpg";
import ori from "../../images/recommendations/Ori.jpg";
import jedi from "../../images/recommendations/Jedi Fallen Order.jpg";
import control from "../../images/recommendations/Control.jpg";
import shadowofwar from "../../images/recommendations/Shadow of War.jpg";
import celeste from "../../images/recommendations/Celeste.png";
import hallOfSmoke from "../../images/recommendations/Hall of Smoke.jpg";

import alanlee from "../../images/recommendations/Alan Lee.png";
import almg from "../../images/recommendations/ALMG.png";
import anato from "../../images/recommendations/Anato Finnstark.png";
import syd from "../../images/recommendations/Syd Mills.png";
import bastien from "../../images/recommendations/Bastien.png";

function RecommendationsPage() {
  const books = [
    <div key="dragonbone">
      <img src={dragonbone} alt="The Dragonbone Chair" />
    </div>,
    <div key="gideon">
      <img src={gideon} alt="Gideon the Ninth" />
    </div>,
    <div key="magician">
      <img src={magician} alt="Magician" />
    </div>,
    <div key="lastwish">
      <img src={lastwish} alt="The Last Wish" />
    </div>,
    <div key="nightwatch">
      <img src={nightwatch} alt="Night Watch" />
    </div>,
    <div key="fifthseason">
      <img src={fifthseason} alt="The Fifth Season" />
    </div>,
    <div key="bonewitch">
      <img src={bonewitch} alt="The Bone Witch" />
    </div>,
    <div key="priory">
      <img src={priory} alt="The Priory of the Orange Tree" />
    </div>,
    <div key="daughter">
      <img src={daughter} alt="Daughter of the Empire" />
    </div>,
    <div key="hall">
      <img src={hallOfSmoke} alt="Hall of Smoke" />
    </div>,
  ];

  const graphicNovels = [
    <div key="monstress">
      <img src={monstress} alt="Monstress" />
    </div>,
    <div key="die">
      <img src={die} alt="DIE" />
    </div>,
    <div key="highesthouse">
      <img src={highesthouse} alt="The Highest House" />
    </div>,
    <div key="coda">
      <img src={coda} alt="Coda" />
    </div>,
    <div key="isola">
      <img src={isola} alt="Isola" />
    </div>,
    <div key="sandman">
      <img src={sandman} alt="Sandman" />
    </div>,
    <div key="reaver">
      <img src={reaver} alt="Reaver" />
    </div>,
    <div key="ratqueens">
      <img src={ratqueens} alt="Rat Queens" />
    </div>,
  ];

  const games = [
    <div key="horizon">
      <img src={horizon} alt="Horizon Zero Dawn" />
    </div>,
    <div key="journey">
      <img src={journey} alt="Journey" />
    </div>,
    <div key="hollow">
      <img src={hollow} alt="Hollow Knight" />
    </div>,
    <div key="witcher">
      <img src={witcher} alt="The Witcher 3" />
    </div>,
    <div key="godofwar">
      <img src={godofwar} alt="God of War 2018" />
    </div>,
    <div key="hellblade">
      <img src={hellblade} alt="Hellblade: Senua's Sacrifice" />
    </div>,
    <div key="ori">
      <img src={ori} alt="Ori Duology" />
    </div>,
    <div key="jedi">
      <img src={jedi} alt="Jedi: Fallen Order" />
    </div>,
    <div key="control">
      <img src={control} alt="Control" />
    </div>,
    <div key="shadowofwar">
      <img src={shadowofwar} alt="Middle Earth: Shadow of War" />
    </div>,
    <div key="celeste">
      <img src={celeste} alt="Celeste" />
    </div>,
    <div key="hades">
      <img src={hades} alt="Hades" />
    </div>,
  ];

  const artists = [
    <div key="anato">
      <img src={anato} alt="Anato Finnstark" />
    </div>,
    <div key="syd">
      <img src={syd} alt="Syd Mills" />
    </div>,
    <div key="almg">
      <img id="almg" src={almg} alt="Anna Le Moine Gray" />
    </div>,
    <div key="alanLee">
      <img src={alanlee} alt="Alan Lee" />
    </div>,
    <div key="bastien">
      <img src={bastien} alt="Bastien LeCouffe DeHarme" />
    </div>,
  ];

  return (
    <div className="App">
      <HeaderMenu />
      <div className="recommendations-page">
        <h1>Recommendations</h1>
        <h2>Conventional Novels</h2>
        <Swiper children={books} />
        <h2>Graphic Novels</h2>
        <Swiper children={graphicNovels} />
        <h2>Video Games</h2>
        <Swiper children={games} />
        <h2>Artists</h2>
        <Swiper children={artists} />
      </div>
    </div>
  );
}

export default RecommendationsPage;
