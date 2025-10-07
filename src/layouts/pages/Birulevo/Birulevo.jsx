import React from "react";
import { Link } from "react-router-dom";
import styles from "./Birulevo.module.scss";
import logo from "../../../assets/back/logo.svg";
import photos from "../../../assets/index";
import { icons } from "../../../assets/index";
import Slider from "../../../components/Slider/Slider";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

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
        <h1 className={styles.mainTitle}>Бирюлёво</h1>
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
              PS Lounge — уютное место с домашней атмосферой. Здесь можно
              отдохнуть, покурить кальян, поиграть в PlayStation и настольные
              игры, устроить вечеринку или просто уединиться. Ждём вас в PS
              Lounge!
            </p>
          ) : (
            <p className={styles.text}>
              Как отмечают наши любимые гости, PS Lounge — это не просто
              кальянная, это место с очень уютной и домашней атмосферой, с
              настроением «как будто пришел к друзьям в гости». У нас можно
              отдохнуть, насладиться классным кальяном, поиграть в PlayStation
              или в настолки, устроить веселую вечеринку в випке или побыть
              наедине с собой. Приятный интерьер, комфортные диваны и мягкие
              подушки. В PS Lounge представлен очень широкий ассортимент
              кальянов и табака, так что каждый сможет найти что-то по своему
              вкусу. Мы ждём вас в PS Lounge! Приходите, будет классно!
            </p>
          )}
        </section>
        <div className={styles.line}></div>

        <Slider slides={photos} />

        <section className={styles.actionsMain}>
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
        </section>
        <section ref={targetRef} className={styles.contacts}>
          <h2 className={styles.title}>Контакты</h2>
          <div className={styles.mainText}>
            <p>Режим работы:</p>
            <p className={styles.address}>пн-чт: 13:00 - 01:00</p>
            <p className={styles.address}>пн-чт: 14:00 - 03:00</p>
          </div>
          <img className={styles.logo} src={logo} alt="" />
          <div className={styles.mainText}>
            <p>Как с нами связаться:</p>
            <a className={styles.address} href="tel:+79801800674">
              +7 (980) 180-06-74
            </a>
            <a className={styles.address} href="tel:+79169118504">
              +7 (916) 911-85-04
            </a>
          </div>
          <a
            className={styles.address}
            href="https://yandex.ru/maps/org/ps_lounge/172043905233/?indoorLevel=1&ll=37.662506%2C55.603446&z=17.25"
          >
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
