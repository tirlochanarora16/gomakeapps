import style from "../../../styles/components/Requirements.module.scss";

const RequirementItem = ({
  decrementCountHandler,
  incrementCountHandler,
  text,
  count,
  id,
  css,
}) => {
  return (
    <div className={style["requirements__item"]} id={id} style={css}>
      <div
        className={style["requirements__item--descrease"]}
        onClick={decrementCountHandler}
      >
        -
      </div>
      <div className={style["requirements__item--count"]}>{count}</div>
      <div
        className={style["requirements__item--increase"]}
        onClick={incrementCountHandler}
      >
        +
      </div>
      <p className={style["requirements__item--name"]}>{text}</p>
    </div>
  );
};

export default RequirementItem;
