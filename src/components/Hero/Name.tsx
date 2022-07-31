import { FC } from "react";
import Typewriter from "typewriter-effect";
import styles from "../../styles/name.module.scss";
import { useStore } from "@nanostores/react";
import { isDarkTheme } from "../../themeStore";

const Name: FC = () => {
  const $isDarkTheme = useStore(isDarkTheme);
  return (
    <h1 className={`${styles.name} ${$isDarkTheme ? styles.dark : ""}`}>
      <Typewriter
        onInit={(typewriter): void => {
          typewriter
            .typeString("Christian Fugraino")
            .pauseFor(1000)
            .deleteChars(5)
            .typeString("arino")
            .start();
        }}
      />
    </h1>
  );
};

export default Name;
