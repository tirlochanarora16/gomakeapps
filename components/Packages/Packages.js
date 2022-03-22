import Image from "next/image";
import thunder from "../../images/icons/thunder.png";

import style from "./Packages.module.scss";

const PackagesItem = (props) => {
  return (
    <div className={style["packages__item"]}>
      <div className={style["packages__item--name"]}>
        <h2>Premium</h2>
      </div>
      <div className={style["packages__item--amount"]}>
        <div className={style["packages__item--amount-monthly"]}>
          <p>895,00 € / mois 1 an d'engagement</p>
        </div>
        <div className={style["packages__item--amount-once"]}>
          <p>ou 8990,00 € en une seule fois</p>
        </div>
      </div>
    </div>
  );
};

const Packages = () => {
  return (
    <section className={style.packages}>
      <div className={style["packages__head"]}>
        <div className={style["packages__icon"]}>
          <Image src={thunder} alt="thunder" />
        </div>
        <h1>
          <span>NOS FORFAITS</span> <strong>VIP PREMIUM</strong>
        </h1>
      </div>
      <div className={style["packages__container"]}>
        {/* <PackagesItem /> */}
      </div>
    </section>
  );
};

export default Packages;
