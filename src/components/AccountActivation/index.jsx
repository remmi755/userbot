import React from "react";
import styles from "./AccountActivation.module.css";

import Circle from "../Circle";
import SendMessageCurl from "../SendMessage.jsx";
import SendMessagePython from "../SendMessagePython";

const messages = [
  { name: "Curl(Bash)", value: <SendMessageCurl /> },
  { name: "Python", value: <SendMessagePython /> },
];
const list = [
  {
    num: 1,
    text: "Отправить сообщение",
    messages: [
      { component: <SendMessageCurl /> },
      { component: <SendMessagePython /> },
    ],
  },
  { num: 2, text: "Отправить фото" },
  { num: 3, text: "Найти пользователя по № телефона" },
];

const AccountActivation = () => {
  const [message, setMessage] = React.useState(list[0].text);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onSelectMessage = (message) => {
    setMessage(message);
  };

  const onSelectTypes = (index) => {
    setActiveIndex(index);
  };
  const res = list.find((x) => x.text === message);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>БЫСТРАЯ И ПОНЯТНАЯ</h1>
      <h1 className={`${styles.title} ${styles.titleBlue}`}>
        САМОСТОЯТЕЛЬНАЯ АКТИВАЦИЯ
      </h1>
      <h1 className={styles.title}>УЧЕТНОЙ ЗАПИСИ</h1>
      <div className={styles.content}>
        <ul className={styles.list}>
          {list.map((item) => (
            <li
              className={styles.li}
              onClick={() => onSelectMessage(item.text)}
            >
              <span className={styles.numberCircle}>{item.num}</span>
              <span className={styles.text}>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className={styles.containerActivity}>
          <h2 className={styles.titleActivity}>{message}</h2>
          <div className={styles.activityToggle}>
            {messages.map((item, index) => (
              <>
                <div
                  key={index}
                  className={styles.activityItem}
                  onClick={() => onSelectTypes(index)}
                >
                  {item.name}
                </div>
              </>
            ))}
          </div>
          {res.messages[activeIndex].component}
          <Circle className={styles.circleBlue} />
        </div>
      </div>
    </div>
  );
};

export default AccountActivation;
