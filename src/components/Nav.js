import React from "react";
import "../styles/Nav.css";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
function Nav() {
  return (
    <div className="nav">
      <img src="https://www.pngkey.com/png/full/171-1713121_transparent-psd-3d-blue-seapunk-neon-net-art.png" alt="" />

      <div className="center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="right">
        <PermIdentityIcon className="icons"/>
        <TuneIcon className="icons" />
      </div>
    </div>
  );
}

export default Nav;
