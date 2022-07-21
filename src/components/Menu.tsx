import React, { FC, useState, useEffect } from "react";
import MenuButton from "./UI/MenuButton";
import styles from "../styles/menu.module.scss";

const Menu: FC = () => {
  const [menuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const close = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e.keyCode === 27) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const handleClick = (): void => {
    setIsMenuOpen(!menuOpen);
  };

  return (
    <menu className={menuOpen ? styles.menu : ""}>
      <MenuButton onClick={handleClick} menuOpen={menuOpen} />
      <ul className={!menuOpen ? styles.list : ""}>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
        <li>Dark Mode</li>
      </ul>
    </menu>
  );
};

export default Menu;
