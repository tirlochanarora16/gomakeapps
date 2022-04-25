import { useState } from "react";

import useMobile from "../../../hooks/Requirements/use-mobile";

import ctaStyle from "../../../styles/components/Cta.module.scss";
import style from "../../../styles/components/Requirements.module.scss";

const MobileRequirementsItem = ({ text, id }) => {
  // setting a state for count
  const [count, setCount] = useState(0);

  // increasing the count using the "useMobile" hook
  const increaseCountHandler = useMobile(setCount, count, "increase");

  // decreasing the count using the "useMobile" hook
  const decreaseCountHandler = useMobile(setCount, count, "decrease");

  return (
    <div className={style["requirements__item"]} id={id}>
      <div
        className={style["requirements__item--descrease"]}
        onClick={decreaseCountHandler}
      >
        -
      </div>
      <div className={style["requirements__item--count"]}>{count}</div>
      <div
        className={style["requirements__item--increase"]}
        onClick={increaseCountHandler}
      >
        +
      </div>
      <p className={style["requirements__item--name"]}>{text}</p>
    </div>
  );
};

const MobileRequirements = () => {
  return (
    <div className={style["requirementsMobile"]}>
      <p className={ctaStyle["cta__question"]}>
        Combien d’application mobile avez vous besoin de créer ?
      </p>
      <div className={style["requirementsMobile__container"]}>
        <MobileRequirementsItem text="Application Android" id="android" />
        <MobileRequirementsItem text="Application iOS" id="ios" />
      </div>
    </div>
  );
};

export default MobileRequirements;
