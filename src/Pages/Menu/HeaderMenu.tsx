import React from "react";
import { NavLink } from 'react-router-dom'
const Facebook = require("../../images/Facebook.png")
const Twitter = require("../../images/Twitter.png")
const Goodreads = require("../../images/Goodreads.png")

const logo = require("../../images/TG Transparent Background.png")

class HeaderMenu extends React.Component<{}, {}> {
    public constructor(props: {}) {
        super(props);
    }

    public render(): JSX.Element {
        return (<div className="header-menu">
            <img className="header-logo" alt="logo" src={logo} />
            <div className="menu-items">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Languages">Language</NavLink>
                <NavLink to="/Recommendations">Recommendations</NavLink>
            </div>
            <div className="social">
                <a target="_blank" href="https://www.facebook.com/tristangraywrites">
                    <img src={Facebook} alt="Facebook" />
                </a>
                <a target="_blank" href="https://twitter.com/TGrayWrites">
                    <img src={Twitter} alt="Twitter" />
                </a>
                <a target="_blank" href="https://www.goodreads.com/author/show/20606471.Tristan_Gray">
                    <img src={Goodreads} alt="Goodreads" />
                </a>
            </div>
        </div>)
    }
}

export default HeaderMenu;