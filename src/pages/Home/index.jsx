import React from "react";
import styles from "./Home.module.css";

import Header from "../../components/Header";
import Rate from "../Rate";
import Differences from "../../components/Differences";
import AccountActivation from "../../components/AccountActivation";

const Home = () => {
  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.rate}>
        <Rate />
      </div>
        <Differences />
        <AccountActivation />
    </>
  );
};

export default Home;
