import React from "react";
import styles from "./Phone.module.css";

import Message from "../Message";
import Circle from "../Circle";

const Phone = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.phone}
        src="https://static.tildacdn.com/tild6235-3461-4466-b436-396665663533/6_1566.png"
        alt=""
      />
      <img
        className={styles.imgMessageTop}
        src="https://static.tildacdn.com/tild3266-3436-4838-b963-653031663266/Group_42_1.jpg"
        alt=""
      />
      <img
        className={styles.imgMessageMiddle}
        src="https://static.tildacdn.com/tild3030-3237-4866-a463-653934636566/Group_26.jpg"
        alt=""
      />
      <img
        className={styles.imgMessageBottom}
        src="https://static.tildacdn.com/tild6433-3135-4331-a662-373137633966/Group_27.jpg"
        alt=""
      />
      <Circle className={styles.phoneCircle} />
      <Circle className={styles.phoneCircleBlue} />
        <img
        className={styles.btnLeft}
        src="https://thumb.tildacdn.com/tild6130-6565-4364-b133-386366653964/-/resize/202x/-/format/webp/photo.png"
        alt=""
       />
        <img
            className={styles.btnRight}
            src="https://thumb.tildacdn.com/tild6130-6565-4364-b133-386366653964/-/resize/202x/-/format/webp/photo.png"
            alt=""
        />
      <img
        className={styles.btnBottom}
        src="https://thumb.tildacdn.com/tild6130-6565-4364-b133-386366653964/-/resize/202x/-/format/webp/photo.png"
        alt=""
      />
    </div>
  );
};

export default Phone;
