import React from "react";
import HeaderMenu from "../Menu/HeaderMenu";
const profile = require("../../images/Profile.png");

function AboutPage() {
  return (
    <div className="App">
      <HeaderMenu />
      <div className="about-page">
        <div className="half">
          <h1>About</h1>
          <p>
            Tristan Gray was a latecomer to Scotland, moving to the north from
            Jersey in 2014.
          </p>
          <p>
            After years of searching to find the real spark behind his writing
            Scotland unlocked it - The rugged country and dark history, which
            also inspired the works of George R. Martin, David Gemmell, and the
            thriving local Science Fiction and Fantasy scene, gave new meaning
            to the fantasy tales of his childhood.
          </p>
          <p>
            Now, with a new connection to an adopted home driving his work, and
            inspiration stretching from conventional novels, to graphic novels,
            to games, Tristan is writing tales worthy of the inspiration by the
            land around him.
          </p>
          <p>
            Tristan released his debut novel, ‘Call of the Black Wing’ in August
            2024. The local writing community page can be found at{" "}
            <a href="https://edinburghsff.com/">https://edinburghsff.com/</a>
          </p>
        </div>
        <div className="half">
          <img alt="Profile" src={profile} />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
