import React from "react";
import { Link } from "react-router-dom";
import styles from "./Taganka.module.scss";
import logo from "../../../assets/back/logo.svg";
import { iconsTag } from "../../../assets/index";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { photosTaganka } from "../../../assets/index";
import SliderTag from "../../../components/SliderTag/SliderTag";
import Mafia from "../../../components/Mafia/Mafia";

const Birulevo = () => {
  const targetRef = useRef(null);

  const scrollToSection = () => {
    targetRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className={styles.container}>
      <header className={styles.containerItem}>
        <img className={styles.logo} src={logo} alt="" />
        <h1 className={styles.mainTitle}>Таганка</h1>
        <div className={styles.buttons}>
          <Link className={styles.link} to="menu">
            меню
          </Link>
          <Link className={styles.link} to="rules">
            правила
          </Link>
          <button onClick={scrollToSection} className={styles.link}>
            контакты
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.about}>
          <h2 className={styles.title}>О НАС</h2>

          {isMobile ? (
            <p className={styles.text}>
              PS Lounge — место, где уют, мягкий свет и приятная компания
              создают особую атмосферу. Кальяны, PlayStation, «Мафия» и
              настольные игры ждут вас. Есть VIP-комната для вечеринок. Добро
              пожаловать в семью!
            </p>
          ) : (
            <p className={styles.text}>
              PS Lounge — это больше, чем просто место. Это атмосфера уюта, где
              мягкий свет, удобные диваны и приятная компания создают особое
              настроение. Кальяны на любой вкус, PlayStation, регулярные игры в
              «Мафию» и настольные игры — всё для вашего идеального отдыха. А в
              комфортной VIP-комнате можно устроить незабываемую вечеринку. Ждём
              вас! Здесь каждый становится своим.
            </p>
          )}
        </section>
        <div className={styles.line}></div>

        <SliderTag photosTaganka={photosTaganka} />

        {/* <section className={styles.actionsMain}>
          <h2 className={styles.title}>АКЦИИ</h2>
          <div className={styles.actions}>
            <div className={styles.action}>
              <h3 className={styles.subTitle}>Кальян за 1400 рублей</h3>
              <div className={styles.actionItem}>
                <p>*По будням с 13:00 до 18:00</p>
                <p>*Не распространяется на VIP-комнаты</p>
                <p>*Кроме выходных и праздничных дней</p>
              </div>
            </div>
            <div className={styles.action}>
              <h3 className={styles.subTitle}>Скидка в день рождения 10%</h3>
              <div className={styles.actionItem}>
                <p>*3 дня до / 3 дня после</p>
                <p>
                  *Не распространяется на минимальный депозит в VIP-комнатах
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <Mafia />
      </main>
      <footer className={styles.footer}>
        <section ref={targetRef} className={styles.contacts}>
          <h2 className={styles.title}>Контакты</h2>
          <div className={styles.mainText}>
            <p>Режим работы:</p>
            <p className={styles.address}>пн-чт: 12:00 - 02:00</p>
            <p className={styles.address}>пт-сб: 14:00 - 05:00</p>
            <p className={styles.address}>вс: 14:00 - 02:00</p>
          </div>
          <img className={styles.logo} src={logo} alt="" />
          <div className={styles.mainText}>
            <p>Как с нами связаться:</p>
            <a className={styles.address} href="tel:+79680689909">
              +7 (968) 068-99-09
            </a>
          </div>
          <a
            target="_blank"
            className={styles.address}
            href="https://yandex.ru/maps/213/moscow/?ll=37.668684%2C55.739650&mode=poi&poi%5Bpoint%5D=37.668014%2C55.739698&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D127811263445&utm_source=ntp_chrome&z=19"
          >
            г. Москва, Таганская ул., 29, стр. 1
          </a>
          <div className={styles.line}></div>
          <div className={styles.icons}>
            {iconsTag.map((el) => (
              <a
                target="_blank"
                key={el.link}
                className={styles.icon}
                href={el.link}
              >
                <img src={el.icon} alt="" />
              </a>
            ))}
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Birulevo;
