import React, { useState } from "react";
import "../styles/Nav.css";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { useDispatch } from "react-redux";
import { addInput } from "../features/inputSlice";

function Nav() {
  const [input, setInput] = useState([]);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addInput(input));
    setInput("");
  };
  return (
    <div className="nav">
      <div className="nav__left">
        <img
          src="https://www.pngkey.com/png/full/171-1713121_transparent-psd-3d-blue-seapunk-neon-net-art.png"
          alt=""
        />
        <h3>Covid Cases</h3>
      </div>
      <form
        className="nav__center"
        onSubmit={(e) => {
          handleFormSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="Search "
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchIcon type="submit" className="nav__icon" />
      </form>
      <div className="nav__right">
        <PermIdentityIcon className="nav__icons" />
        <TuneIcon className="nav__icons" />
      </div>
    </div>
  );
}

export default Nav;
