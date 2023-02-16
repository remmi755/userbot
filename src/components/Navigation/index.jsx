import React from "react";
import styles from "./Navigation.module.css";

import Logo from "../../assets/img/Logo";
import {useTranslation} from "react-i18next";

const Navigation = () => {
    const { t } = useTranslation();
  const titles = ["Тариф", "Поддержка", "Документация"];
  // const [activeIndex, setIndex] = React.useState("");
  //
  // const onSelectTitle = (index) => {
  //   setIndex(index);
  // };

  return (
    <div className={styles.container}>
      <Logo />
      <ul>
        {titles.map((title, index) => (
          <li
            key={index}
            className={styles.title}
            // onClick={() => onSelectTitle(index)}
            // className={`${styles.title} ${
            //   activeIndex === index ? styles.active : ""
            // }`}
          >
              {/*{t('text_h2')}*/}
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
