import React from "react";
import styles from "./SendMessage.module.css";

const SendMessageCurl = () => {
  const token = "<Your token>";
  return (
    <div className={styles.container}>
      <p className={styles.textItem}>curl \</p>
      <p className={styles.textItem}>-d '' \</p>
      <p className={styles.textItem}>-H 'accept: application/json' \</p>
      <p className={styles.textItem}>-H 'Authorization: Bearer {token}'\</p>
      <p className={styles.textItem}>-X 'POST' \</p>
      <p className={styles.textItem}>
        https://userbot-api.tech/api/v1/telegram/send_message?
      </p>
      <p className={styles.textItem}>
        chat_id=1234567890&message=Hello%20World%21' \
      </p>
    </div>
  );
};

export default SendMessageCurl;
