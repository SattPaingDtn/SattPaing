import React from "react";
import { navLinks } from "../constants";
import { styles } from "../styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed z-10 bg-gradient-to-r from-primary to-secondary drop-shadow-2xl rounded-b-md`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-custom-white bold text-xl">Satt Paing</div>
        </Link>
        <ul className="flex gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className="text-custom-white bold">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
