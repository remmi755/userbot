import React from 'react';
import styles from "./Message.module.css";

const Message = () => {
    return (
        <div>
            <img
                className={styles.imgMessage}
                src="https://static.tildacdn.com/tild3030-3237-4866-a463-653934636566/Group_26.jpg"
                alt=""
            />
        </div>
    );
};

export default Message;
