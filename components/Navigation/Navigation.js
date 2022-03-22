import Image from "next/image";

import { FaLanguage } from "react-icons/fa";
import { navigationMenuItems } from "./NavigationData";
import logo from "../../images/navigation/logo.png";

import style from "./Navigation.module.scss";

const NavigationItem = (props) => {
  return (
    <div className={style["navigation__item"]} key={props.id}>
      <div className={style["navigation__item--icon"]}>{props.icon}</div>
      <div className={style["navigation__item--text"]}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

const Navigation = (props) => {
  return (
    <nav
      className={style.navigation}
      style={{
        backgroundColor: props.changeNavbar ? "#fff" : "",
        borderBottom: !props.changeNavbar ? "1px solid transparent" : "",
      }}
    >
      <div className={style["navigation__logo"]}>
        <Image src={logo} alt="go make apps logo" width={85} height={100} />
      </div>
      <div className={style["navigation__list"]}>
        {navigationMenuItems.map((item, index) => (
          <NavigationItem
            id={item.id}
            icon={item.icon}
            text={item.text}
            key={item + index}
          />
        ))}
      </div>
      <div className={style["navigation__lang"]}>
        <div style={{ color: props.changeNavbar ? "#000" : "" }}>
          <FaLanguage />
        </div>
        <form>
          <select
            name="language"
            style={{ color: props.changeNavbar ? "#000" : "" }}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
        </form>
      </div>
    </nav>
  );
};

export default Navigation;
