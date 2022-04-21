import Image from "next/image";
import Link from "next/link";

import thunder from "../../images/icons/thunder.png";
import monitor from "../../images/icons/monitor.svg";
import monitorLight from "../../images/icons/monitor-light.png";
import smartphone from "../../images/icons/smartphone.svg";
import smartphoneLight from "../../images/icons/smartphone-light.png";
import smartwatch from "../../images/icons/smartwatch.svg";

import { premiumPackageItems, privilegeAndunlimitedPackageItems } from "./data";

import style from "./Packages.module.scss";

const PackagesListItem = (props) => {
  const colorStyle = {
    color:
      props.package === "unlimited"
        ? "#f2f2f2"
        : props.package === "privilege"
        ? "#000"
        : "",
  };
  return (
    <div className={style["packages__item--list-item"]}>
      <div
        className={style["packages__item--list-icon"]}
        style={{
          filter: props.package === "privilege" ? "brightness(0%)" : "",
        }}
      >
        <Image alt="package icon" src={props.icon} width={20} height={20} />
      </div>
      <div className={style["packages__item--list-text"]}>
        <p style={colorStyle}>{props.text}</p>
      </div>
    </div>
  );
};

//895,00 € / mois, 1 an d'engagement, ou 8990,00 € en une seule fois

const PackagesItem = (props) => {
  const styles = {
    backgroundColor:
      props.packageName === "privilege"
        ? "#0141f8"
        : props.packageName === "unlimited"
        ? "#000"
        : "",
    marginTop: props.packageName === "unlimited" ? "1rem" : "",
  };

  const colorStyle = {
    color:
      props.packageName === "unlimited"
        ? "#f2f2f2"
        : props.packageName === "privilege"
        ? "#000"
        : "",
  };

  return (
    <div
      className={style["packages__item"]}
      style={{
        backgroundColor: props.packageName === "unlimited" ? "#000" : "",
      }}
      key={props.id}
    >
      <div className={style["packages__item--name"]} style={styles}>
        <h2>{props.packageName}</h2>
      </div>
      <div className={style["packages__item--container"]}>
        <div className={style["packages__item--amount"]}>
          <div className={style["packages__item--amount-monthly"]}>
            <p style={colorStyle}>{props.monthlyAmount}</p>
            <p style={colorStyle}>{props.timePeriod}t</p>
          </div>
          <div className={style["packages__item--amount-once"]}>
            <p style={colorStyle}>{props.oneTimeAmount}</p>
          </div>
          <div
            className={style["packages__item--amount-divider"]}
            style={{
              backgroundColor:
                props.packageName === "unlimited" ? "#f2f2f2" : "",
            }}
          ></div>
        </div>
        <div className={style["packages__item--list"]}>
          {props.packageItems.map((item) => (
            <PackagesListItem
              package={props.packageName}
              icon={item.icon}
              text={item.text}
              key={item.id}
            />
          ))}
        </div>
        <div
          className={style["packages__item-button"]}
          style={{
            color:
              props.packageName === "privilege" ||
              props.packageName === "unlimited"
                ? "#000"
                : "",
            backgroundColor: props.packageName === "unlimited" ? "#fff" : "",
          }}
        >
          <Link href="#">Buy Now</Link>
        </div>
        <div className={style["packages__item-icons"]}>
          {props.icons.map((icon, index) => (
            <Image
              alt="gomakeapps items icons"
              src={icon.icon}
              key={index}
              width={25}
              height={25}
            />
          ))}
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
        <PackagesItem
          id={1}
          packageName="premium"
          monthlyAmount="895,00 € / mois"
          timePeriod="1 an d'engagement"
          oneTimeAmount="ou 8990,00 € en une seule fois"
          packageItems={premiumPackageItems}
          icons={[{ id: 1, icon: monitor.src }]}
        />
        <PackagesItem
          id={2}
          packageName="privilege"
          monthlyAmount="4500,00 € / mois"
          timePeriod="1 an d'engagement"
          oneTimeAmount="ou 49 500,00 € en une seule fois"
          packageItems={privilegeAndunlimitedPackageItems}
          icons={[
            { id: 1, icon: monitor.src },
            { id: 2, icon: smartphone.src },
          ]}
        />
        <PackagesItem
          id={3}
          packageName="unlimited"
          monthlyAmount="8500,00 € / mois"
          timePeriod="1 an d'engagement"
          oneTimeAmount="ou 99 500,00 € en une seule fois"
          packageItems={privilegeAndunlimitedPackageItems}
          icons={[
            { id: 1, icon: monitorLight.src },
            { id: 2, icon: smartphoneLight.src },
            { id: 3, icon: smartwatch.src },
          ]}
        />
      </div>
    </section>
  );
};

export default Packages;
