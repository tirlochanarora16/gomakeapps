import HeaderItem from "./Items/HeaderItem";

import { headerNavigationData } from "./HeaderData";

import style from "../../styles/components/Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style["header__items"]}>
        {headerNavigationData.map((item, index) => (
          <HeaderItem
            key={item.id + index}
            title={item.title}
            icon={item.icon}
            text={item.text}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
