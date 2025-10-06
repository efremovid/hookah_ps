import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import logo from "../../../assets/back/logo.svg";

const Home = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="" />
      <div className={styles.containerItem}>
        <Link className={styles.title} to="/birulevo">
          Бирюлёво
        </Link>
        <div className={styles.line}></div>
        <Link className={styles.title} to="/birulevo">
          Таганка
        </Link>
      </div>
    </div>
  );
};

export default Home;
