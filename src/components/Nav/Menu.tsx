import React, { FC, useState, useEffect } from "react";
import MenuButton from "../UI/MenuButton";
import styles from "../../styles/menu.module.scss";
import { useStore } from "@nanostores/react";
import { isDarkTheme } from "../../themeStore";

const Menu: FC = () => {
  const [menuOpen, setIsMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const $isDarkTheme = useStore(isDarkTheme);

  useEffect(() => {
    const close = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e.keyCode === 27) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    const backgroundColor = dark ? "#323232" : "#fff";
    document.body.style.setProperty("--theme", backgroundColor);
  }, [dark]);

  const handleClick = (): void => {
    setIsMenuOpen(!menuOpen);
  };

  const handleDarkMode = () => {
    isDarkTheme.set(!$isDarkTheme);
    setDark(!dark);
    setIsMenuOpen(false);
  };

  return (
    <menu className={`${menuOpen ? styles.menu : ""} ${$isDarkTheme ? styles.dark : ""}`}>
      <MenuButton onClick={handleClick} menuOpen={menuOpen} />
      <ul className={!menuOpen ? styles.list : ""}>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
        <li onClick={handleDarkMode}>{$isDarkTheme ? "Light" : "Dark"} Mode</li>
      </ul>
    </menu>
  );
};

export default Menu;
