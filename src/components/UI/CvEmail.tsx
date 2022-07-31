import styles from "../../styles/cvEmail.module.scss";
import { useStore } from "@nanostores/react";
import { isDarkTheme } from "../../themeStore";

const CvEmail = () => {
  const $isDarkTheme = useStore(isDarkTheme);
  return (
    <aside className={`${styles.aside} ${$isDarkTheme ? styles.dark : ""}`}>
      <a>download cv</a> / <a>copy email</a>
    </aside>
  );
};

export default CvEmail;
