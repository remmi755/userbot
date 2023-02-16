import React from "react";
import styles from "./Table.module.css";

const Table = () => {
  const list = [
    { id: 1, name: "Можно писать первым по номеру телефона"},
    { id: 2, name: "Возможность читать сообщения в группах" },
    { id: 3, name: "Возможность общаться через интерфейс Telegram"},
    {id: 4, name: "Все возможности обычного пользователя Telegram"},
  ];
  let tableBody = list.map(function (item) {
    return (
      <tr key={item.id}>
        <td className={styles.text}>{item.name}</td>
        <td>
          <span className={styles.iconCircle}>
            <svg
              role="img"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <circle fill="#25B309" cx="12" cy="12" r="12"></circle>
                <polygon
                  fill="#FFFFFF"
                  points="10.776 16.32 5.184 10.728 5.688 10.2 10.776 15.288 18.792 7.272 19.296 7.8"
                ></polygon>
              </g>
            </svg>
          </span>
        </td>
        <td>
          <span className={styles.iconCircle}>
            <svg
              role="img"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <circle fill="#F24611" cx="12" cy="12" r="12"></circle>
                <polygon
                  fill="#FFFFFF"
                  points="17.28 7.32 16.8 6.84 12.072 11.592 7.32 6.84 6.84 7.32 11.592 12.072 6.84 16.8 7.32 17.28 12.072 12.528 16.8 17.28 17.28 16.8 12.528 12.072"
                ></polygon>
              </g>
            </svg>
          </span>
        </td>
      </tr>
    );
  });

  return (
    <>
      <table>
        <tr className={styles.header}>
          <th></th>
          <th className={styles.bot}>TELEGRAM ЮЗЕРБОТ</th>
          <th className={styles.bot}>TELEGRAM БОТ</th>
        </tr>
        <tbody>{tableBody}</tbody>
      </table>
    </>
  );
};

export default Table;
