import Socials from "../UI/Socials";
import Name from "./Name";
import styles from "../../styles/heroContent.module.scss";
import ContactButton from "../UI/ContactButton";
import { useStore } from "@nanostores/react";
import { isDarkTheme } from "../../themeStore";

const HeroContent = () => {
  const $isDarkTheme = useStore(isDarkTheme);
  return (
    <div className={`${styles.heroGrid}`}>
      <Socials />
      <div className={`${styles.heroText} ${$isDarkTheme ? styles.dark : styles.light}`}>
        <Name />
        <h2>FRONT END DEVELOPER</h2>
        <p>
          Hi, I'm Christian. I know how to center a div.
          <br />
          Also, cats are better than dogs.
        </p>
        <ContactButton />
      </div>
      <div className={`${styles.heroImg}`}>
        <img
          width="1810"
          height="1512"
          src={
            $isDarkTheme ? "/images/ezgif.com-gif-maker (1).gif" : "/images/ezgif.com-gif-maker.gif"
          }
          alt="hero img"
        />
      </div>
    </div>
  );
};

export default HeroContent;
