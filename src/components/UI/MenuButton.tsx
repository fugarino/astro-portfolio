import { FC } from "react";
import styles from "../../styles/menuButton.module.scss";

const MenuButton: FC = ({ onClick, menuOpen }) => {
  return (
    <button
      className={`${styles.button} ${menuOpen ? styles.open : ""}`}
      onClick={onClick}
    ></button>
  );
};

export default MenuButton;
