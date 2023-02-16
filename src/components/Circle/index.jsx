import React from 'react';
import styles from "./Circle.module.css";

const Circle = ({className}) => {
    return (
        <>
            <div
                className={`${className} ${styles.circle}`}
            >

            </div>
        </>

    );
};

export default Circle;
