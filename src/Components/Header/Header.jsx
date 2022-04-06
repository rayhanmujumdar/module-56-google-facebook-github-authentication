import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="bg-stone-700 text-white py-4 uppercase">
        <Link className="mx-3 hover:text-orange-700" to={"/"}>Home</Link>
        <Link className="mx-3 hover:text-orange-700" to="/log-in">Log-in</Link>
        <Link className="mx-3 hover:text-orange-700" to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Header;
