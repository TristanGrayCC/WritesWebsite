import React from "react";
import HeaderMenu from "../Menu/HeaderMenu";
const arrow = require("../../images/Arrow.png")

function BlogPage() {    
    return (<div className="App">
        <HeaderMenu />
        <div className="blog-page">
            <div className="half">
                <img className="arrow arrow-one" src={ arrow } alt="Arrow"/>
                <h1><a href="https://ko-fi.com/tristangray/posts">Link to Blog</a></h1>
                <img className="arrow arrow-two" src={ arrow } alt="Arrow"/>
            </div>
        </div>
    </div>)
}

export default BlogPage;