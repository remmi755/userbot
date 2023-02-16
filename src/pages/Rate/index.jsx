import React from 'react';
import styles from "./Rate.module.css"

import UserBotApi from "../../components/UserBotApi";
import Phone from "../../components/Phone";

const Rate = () => {
    return (
        <div className={styles.container}>
            < UserBotApi />
            <Phone />
        </div>
    );
};

export default Rate;
