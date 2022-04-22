import Image from "next/image";
import style from "../../../styles/components/HeaderItem.module.scss";

const HeaderItem = (props) => {
  return (
    <div className={style["header__item"]}>
      <div className={style["header__item--icon"]}>
        <Image src={props.icon} alt={props.text} width={100} height={100} />
      </div>
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
