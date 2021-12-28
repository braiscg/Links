import React from "react";
import logo from "../assets/braiscg.png";
import "../css/skeleton.css";
import "../css/normalize.css";
import "../css/components.css";

function Header() {

  return (
    <div className="Header container">
      <div className="Header__inner">

        <img src={logo} alt="Brais Comesaña Profile" />
        <h2>
          <b>Brais Comesaña</b>
        </h2>
        <p>I'm an active and curious entrepreneur. I love sports, adventures, business, technology, and food. A few years ago I co-founded a few startups and sold one of them. <br/>Now I'm building Corporate Lab. We work with corporates building new ventures using their unfair advantages to go further than startups disrupting their industries. Thanks for visiting my handmade free linktree alternative. </p>

      </div>
    </div>
  );
}

export default Header;
