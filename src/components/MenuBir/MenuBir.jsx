import React from "react";
import { menuBirulevo } from "../../assets/index";
import styles from "./MenuBir.module.scss"

const MenuBir = () => {
  return (
    <div className={styles.container}>
      {menuBirulevo.map((el) => (
        <img className={styles.image} src={el}></img>
      ))}
    </div>
  );
};

export default MenuBir;
