import React from "react";
import { menuTagankaArr } from "../../assets/index";
import styles from "./MenuTag.module.scss"

const MenuTag = () => {
  return (
    <div className={styles.container}>
      {menuTagankaArr.map((el) => (
        <img className={styles.image} src={el}></img>
      ))}
    </div>
  );
};

export default MenuTag;
