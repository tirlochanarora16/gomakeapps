import style from "./HeaderItem.module.scss";

const HeaderItem = (props) => {
  return (
    <div className={style["header__item"]}>
      <div className={style["header__item--icon"]}>{props.icon}</div>
      <div className={style["header__item--heading"]}>
        <h1>{props.title}</h1>
      </div>
      <div className={style["header__item--text"]}>
        <p>{props.text}</p>
      </div>
      <div className={style["header__item--button"]}>
        <button>Create now</button>
      </div>
    </div>
  );
};

export default HeaderItem;
