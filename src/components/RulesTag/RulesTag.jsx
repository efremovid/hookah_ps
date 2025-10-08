import React from "react";
import styles from "./RulesTag.module.scss";
import { rulesTagPhoto } from "../../assets/index";

const RulesTag = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={rulesTagPhoto} alt="" />
    </div>
  );
};

export default RulesTag;
