import { RiAppStoreFill } from "react-icons/ri";
import { FaDesktop, FaPaintBrush } from "react-icons/fa";
import { BsCameraVideoFill } from "react-icons/bs";

import HeaderItem from "./Items/HeaderItem";

import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style["header__items"]}>
        <HeaderItem
          icon={<RiAppStoreFill />}
          title="iOS and Android Apps"
          text="Let’s empower you with a brand new original App GOMAKEAPPS.COM"
        />
        <HeaderItem
          icon={<FaDesktop />}
          title="Websites and SEO"
          text="We will build for you an astonishing website !"
        />
        <HeaderItem
          icon={<BsCameraVideoFill />}
          title="Video Animation"
          text="Make short videos to promote and explain your business or prepare for an event"
        />
        <HeaderItem
          icon={<FaPaintBrush />}
          title="Content Design"
          text="Design brochures, flyers, social media posts and more"
        />
      </div>
    </header>
  );
};

export default Header;
