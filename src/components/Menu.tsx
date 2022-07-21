import { FC, useState } from "react";
import MenuButton from "./UI/MenuButton";
import styles from "../styles/menu.module.scss";

const Menu: FC = () => {
  const [menuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (): void => {
    setIsMenuOpen(!menuOpen);
  };

  return (
    <menu className={menuOpen ? styles.menu : ""}>
      <MenuButton onClick={handleClick} text="Click me" />
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
