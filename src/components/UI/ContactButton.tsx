import styles from "../../styles/contactButton.module.scss";
import { useStore } from "@nanostores/react";
import { isDarkTheme } from "../../themeStore";

const ContactButton = () => {
  const $isDarkTheme = useStore(isDarkTheme);
  return (
    <button aria-label="contact" className={`${styles.button} ${$isDarkTheme ? styles.dark : ""}`}>
      Contact me!
    </button>
  );
};

export default ContactButton;
