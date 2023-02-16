import React from 'react';
import styles from './Differences.module.css'
import Table from "../Table";

const Differences = () => {
    return (
        <div className={styles.container}>
            <h1 className={`${styles.title} ${styles.titleBlue}`}>ОТЛИЧИЯ</h1>
            <h1 className={styles.title}>ЮЗЕРБОТА ОТ БОТА</h1>
            <Table/>
        </div>
    );
};

export default Differences;
