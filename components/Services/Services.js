import Image from "next/image";
import Link from "next/link";
import check from "../../images/services/check.png";

import style from "../../styles/components/Services.module.scss";

const ServiceItem = (props) => {
  return (
    <div className={style["services__item"]}>
      <h2>{props.title}</h2>
      <div className={style["services__item--button"]}>
        <Link href="#">Learn More</Link>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className={style.services}>
      <div className={style["services__head"]}>
        <div className={style["services__icon"]}>
          <Image src={check} width={60} height={60} alt="check marker image" />
        </div>
        <h1>Services</h1>
      </div>
      <div className={style["services__items"]}>
        <ServiceItem title="Development &#38; Engineering" />
        <ServiceItem title="Design" />
        <ServiceItem title="Strategy" />
      </div>
    </section>
  );
};

export default Services;
