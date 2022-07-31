import styles from "../../styles/skill.module.scss";
import { useStore } from "@nanostores/react";
import { isDarkTheme } from "../../themeStore";

const Skill = ({ name }) => {
  const $isDarkTheme = useStore(isDarkTheme);
  return <h4 className={`${styles.name} ${$isDarkTheme ? styles.dark : ""}`}>{name}</h4>;
};

export default Skill;
