import React from "react";
import { Link } from "react-router-dom";
import BtnGoBack from "../../../components/BtnGoBack/BtnGoBack";
import styles from "./Birulevo.module.scss";
import logo from "../../../assets/back/logo.svg";
import photos from "../../../assets/index";
import { icons } from "../../../assets/index";
import Slider from "../../../components/Slider/Slider";

const Birulevo = () => {
  return (
    <div className={styles.container}>
      <header className={styles.containerItem}>
        <img className={styles.logo} src={logo} alt="" />
        <h2 className={styles.title}>Бирюлёво</h2>
        <div className={styles.buttons}>
          <Link className={styles.link} to="/birulevo/menu">меню</Link>
          <Link className={styles.link} to="/birulevo/rules">правила</Link>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.about}>
          <h2 className={styles.title}>О НАС</h2>
          <p className={styles.text}>
            PS Lounge — уютное место с домашней атмосферой. Здесь можно
            отдохнуть, покурить кальян, поиграть в PlayStation и настольные
            игры, устроить вечеринку или просто уединиться. Ждём вас в PS
            Lounge!
          </p>
        </section>
        <div className={styles.line}></div>

        <Slider slides={photos}/>
        {/* <section className={styles.gallary}>
          {photos.map((el) => (
            <img src={el} alt="" />
          ))}
        </section> */}
        <section className={styles.actions}>
          <div className={styles.action}>
            <h3>Кальян за 1400 рублей!</h3>
            <div className={styles.actionItem}>
              <p>*По будням с 13:00 до 18:00</p>
              <p>*Не распространяется на VIP-комнаты</p>
              <p>*Кроме выходных и праздничных дней</p>
            </div>
          </div>
          <div className={styles.action}>
            <h3>Скидка в день рождения 10%!</h3>
            <div className={styles.actionItem}>
              <p>*3 дня до / 3 дня после</p>
              <p>*Не распространяется на минимальный депозит в VIP-комнатах</p>
            </div>
          </div>
        </section>
        <section className={styles.contacts}>
          <h3>Контакты</h3>
          <div className={styles.mainText}>
            <p>Режим работы:</p>
            <p>пн-чт: 13:00 - 01:00</p>
            <p>пн-чт: 14:00 - 03:00</p>
          </div>
          <img className={styles.logo} src={logo} alt="" />
          <div className={styles.mainText}>
            <p>Как с нами связаться:</p>
            <a href="tel:+79801800674">+7 (980) 180-06-74</a>
            <a href="tel:+79169118504">+7 (916) 911-85-04</a>
          </div>
          <a href="https://yandex.ru/maps/org/ps_lounge/172043905233/?indoorLevel=1&ll=37.662506%2C55.603446&z=17.25">
            г. Москва 6-я Радиальная ул., 5, корп. 4
          </a>
          <div className={styles.line}></div>
          <div className={styles.icons}>
            {icons.map((el) => (
              <a className={styles.icon} href={el.link}>
                <img src={el.icon} alt="" />
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Birulevo;
