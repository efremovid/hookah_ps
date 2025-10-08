import React from "react";
import styles from "./Mafia.module.scss";
import { HiCalendarDays } from "react-icons/hi2";
import { FaRedhat } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const Mafia = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <a target="_blank" href="https://mafia-msk.ru/">
          <h2 className={styles.title}>Мафия у губернатора</h2>
        </a>
        <h3 className={styles.subTitle}>
          Это клуб, где каждый вечер превращается в захватывающую историю.
        </h3>
        <p className={styles.subText}>
          Ты можешь быть кем угодно: хитрым мафиози, проницательным шерифом или
          мирным жителем, который одним ходом перевернёт игру. Но самое главное
          - это люди. Наш клуб - большая семья, где всегда ждут, где легко
          находить новых друзей.
        </p>
        <div className={styles.time}>
          <div className={styles.days}>
            <p>Поднедельник</p>
            <div className={styles.line}></div>
            <p>Среда</p>
            <div className={styles.line}></div>
            <p>Пятница</p>
            <div className={styles.line}></div>
            <p>Суббота</p>
          </div>
          <div className={styles.icons}>
            <a href="https://t.me/vsemary">
              <FaExternalLinkAlt className={styles.link} />
            </a>
            <FaRedhat className={styles.hat} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mafia;
