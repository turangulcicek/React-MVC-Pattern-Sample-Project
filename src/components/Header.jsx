import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>Forum</h1>
      <div className="navlink">
        <NavLink to={"/"}>Gönderiler</NavLink>
        <NavLink to={"/add-post"}>Gönderi Ekle</NavLink>
      </div>
    </header>
  );
};

export default Header;
