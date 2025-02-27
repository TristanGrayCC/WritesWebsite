import React, { JSX } from "react";
import { NavLink } from "react-router-dom";
import Facebook from "../../images/logos/Facebook.png";
import Instagram from "../../images/logos/Instagram.png";
import Goodreads from "../../images/logos/Goodreads.png";
import Tiktok from "../../images/logos/Tiktok.png";
import Bluesky from "../../images/logos/Bluesky.png";
import menu from "../../images/Menu.webp";

import logo from "../../images/TG Transparent Background.png";

interface MenuState {
  menuShown: boolean;
}

class HeaderMenu extends React.Component<{}, MenuState> {
  public constructor(props: {}) {
    super(props);
    this.state = { menuShown: false };
  }

  showMenu(): void {
    this.setState({
      menuShown: !this.state.menuShown,
    });
  }

  public render(): JSX.Element {
    return (
      <div className="header-menu">
        <NavLink to="/">
          <img className="header-logo" alt="logo" src={logo} />
        </NavLink>
        <h1>Tristan Gray</h1>
        <button onClick={() => this.showMenu()} className="menu">
          <img alt="menu" src={menu} />
        </button>
        <div
          className={
            this.state.menuShown ? "menu-items show-menu" : "menu-items"
          }
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Blog">Blog</NavLink>
          <NavLink to="/Writing">Other Writing</NavLink>
          <NavLink to="/Languages">Language</NavLink>
          <NavLink to="/Recommendations">Recommendations</NavLink>
          <NavLink to="/AIConsultation">AI Consultation</NavLink>
        </div>
        <div className="social">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/tgraywrites"
          >
            <img src={Facebook} alt="Facebook" />
          </a>
          <a
            className="instagram"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/tgraywrites"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://bsky.app/profile/eidyngray.scot"
          >
            <img src={Bluesky} alt="Bluesky" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tiktok.com/@tgraywrites"
          >
            <img src={Tiktok} alt="Tiktok" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.goodreads.com/author/show/20606471.Tristan_Gray"
          >
            <img src={Goodreads} alt="Goodreads" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:tristan@eidyngray.co.uk?subject=Website Contact"
          >
            <p>@</p>
          </a>
        </div>
      </div>
    );
  }
}

export default HeaderMenu;
