import { FC } from "react";
import styles from "../../styles/menuButton.module.scss";
import { useStore } from "@nanostores/react";
import { isDarkTheme } from "../../themeStore";

const MenuButton: FC = ({ onClick, menuOpen }) => {
  const $isDarkTheme = useStore(isDarkTheme);
  return (
    <button
      aria-label="menu"
      className={`${styles.button} ${menuOpen ? styles.open : ""} ${
        $isDarkTheme ? styles.dark : ""
      }`}
      onClick={onClick}
    ></button>
  );
};

export default MenuButton;
