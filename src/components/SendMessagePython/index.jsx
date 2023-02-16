import React from "react";
import styles from "./SendMessagePython.module.css";

const SendMessagePython = () => {
  const param = "params = {\n";
  const chat = '"chat_id": "1234567890",';
  const message = '"message": "Hello World!"\n';
  const headers = "}, headers = {\n";
  const authorization = '"Authorization": "Bearer <Your token>"\n';
  const brackets = "})\n";
  const print = "print(r.status_code, r.json())";

  return (
    <div className={styles.container}>
      <p className={styles.textItem}>import requests</p>
      <p className={styles.textItem}>
        r =
        requests.post("https://userbot-api.tech/api/v1/telegram/send_message",
      </p>
      <p className={styles.textItem}>{param}</p>
      <p className={styles.textItem}>{chat}</p>
      <p className={styles.textItem}>{message}</p>
      <p className={styles.textItem}>{headers}</p>
      <p className={styles.textItem}>{authorization}</p>
      <p className={styles.textItem}>{brackets}</p>
      <p className={styles.textItem}>{print}</p>
    </div>
  );
};

export default SendMessagePython;
