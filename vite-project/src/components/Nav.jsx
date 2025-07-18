import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
        <img
        className="logo" src="https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png" alt="logo" />
      {auth ? (
        <ul className="nav-ul">
          <li> <Link to="/">Products</Link></li>
          <li><Link to="/add">Add Products</Link> </li>
          <li><Link to="/update">Update Products</Link></li>
          <li> <Link to="/profile">Profile</Link></li>
          <li> <Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name}) </Link></li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>{" "} <Link to="/signup">SignUp</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      )}
    </div>
  );
};
export default Nav;
