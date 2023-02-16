import React from "react";
import styles from "./Header.module.css";

import Navigation from "../Navigation";
import Button from "../Button";
import Circle from "../Circle";

import {useTranslation} from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img
          className={styles.imgLogo}
          src="https://thumb.tildacdn.com/tild3462-3531-4236-b830-666334313562/-/cover/116x116/center/center/-/format/webp/telegram_logo_png_im.png"
          alt=""
        />
        <Navigation />

        <div className={styles.flagBlock}>
          <Button className={styles.btnHeader}>Личный кабинет</Button>
          <img onClick={() => changeLanguage("ru")}
            className={styles.imgFlag}
            src="https://thumb.tildacdn.com/tild3831-6336-4038-a163-613964383666/-/resize/72x/-/format/webp/Flag_of_Russiasvg.png"
            alt=""
          />
          <img onClick={() => changeLanguage("ua") }
            className={`${styles.imgFlag} ${styles.rightFlag}`}
            src="https://cdn3.iconfinder.com/data/icons/ukraine-3/512/flag_country_nation_ukraine_design_icons_free-512.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
