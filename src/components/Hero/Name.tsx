import { FC } from "react";
import Typewriter from "typewriter-effect";
import styles from "../../styles/name.module.scss";

const Name: FC = () => {
  return (
    <h1 className={styles.name} style={{ minHeight: "80px" }}>
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
