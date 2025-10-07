import React from "react";
import styles from "./RulesBir.module.scss";
import { rulesBirImg } from "../../assets/index";

const RulesBir = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={rulesBirImg} alt="" />
    </div>
  );
};

export default RulesBir;
