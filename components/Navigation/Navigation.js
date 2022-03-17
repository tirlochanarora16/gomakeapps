import { useEffect } from "react";
import Image from "next/image";

import { AiFillHome } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import { RiPencilRuler2Fill } from "react-icons/ri";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaLanguage } from "react-icons/fa";
import logo from "../../images/navigation/logo.png";

import style from "./Navigation.module.scss";

const NavigationItem = (props) => {
  return (
    <div className={style["navigation__item"]}>
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
      style={{ backgroundColor: props.changeNavbar ? "#fff" : "" }}
    >
      <div className={style["navigation__logo"]}>
        <Image src={logo} alt="go make apps logo" width={85} height={100} />
      </div>
      <div className={style["navigation__list"]}>
        <NavigationItem icon={<AiFillHome />} text="Accueil" />
        <NavigationItem icon={<HiDocumentText />} text="Accueil" />
        <NavigationItem icon={<RiPencilRuler2Fill />} text="Accueil" />
        <NavigationItem icon={<AiTwotoneThunderbolt />} text="Accueil" />
        <NavigationItem icon={<AiFillCheckCircle />} text="Service" />
        <NavigationItem icon={<RiCustomerServiceFill />} text="Contact" />
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
