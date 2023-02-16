import React from "react";
import styles from "./UserBotApi.module.css";

import Button from "../Button";
import Circle from "../Circle";

import { useTranslation } from "react-i18next";

const UserBotApi = () => {
    const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TELEGRAM USERBOT API</h1>
      <h2 className={styles.h2}>{t('text_h2')}</h2>
      <p className={styles.p}>{t('text')}</p>
      <div className={styles.opportunityBlock}>
        <div className={styles.opportunitiesBot}>
          <img
            className={styles.imgLogo}
            src="https://static.tildacdn.com/tild6437-3338-4862-a639-326361373761/Tilda_Icons_27bu_1_1.svg"
            alt=""
          />
            <span className={styles.opportunityBlue}>Можно писать первым </span>
            <span className={styles.opportunityBlack}>по номеру телефона</span>
        </div>
          <div className={styles.opportunitiesBot}>
              <img
                  className={styles.imgLogo}
                  src="https://static.tildacdn.com/tild6437-3338-4862-a639-326361373761/Tilda_Icons_27bu_1_1.svg"
                  alt=""
              />
              <span className={styles.opportunityBlack}>Есть возможность </span>
              <span className={styles.opportunityBlue}>читать сообщения в группах</span>
          </div>
          <div className={styles.opportunitiesBot}>
              <img
                  className={styles.imgLogo}
                  src="https://static.tildacdn.com/tild6437-3338-4862-a639-326361373761/Tilda_Icons_27bu_1_1.svg"
                  alt=""
              />
              <span className={styles.opportunityBlack}>Возможность </span>
              <span className={styles.opportunityBlue}>общаться через интерфейс</span>
              <span className={styles.opportunityBlack}>Telegram </span>
          </div>
      </div>
        <Button className={styles.buttonUserBotApi}>Попробовать бесплатно!</Button>
       <Circle  className={styles.userBotCircle}/>
       <Circle  className={styles.userBotCircleBlue}/>
    </div>
  );
};

export default UserBotApi;
