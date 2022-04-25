import { useState } from "react";

import useCounter from "../../../hooks/Requirements/use-counter";

import ctaStyle from "../../../styles/components/Cta.module.scss";
import style from "../../../styles/components/Requirements.module.scss";

const WebRequirement = () => {
  const [count, setCount] = useState(0);

  // using the "useCounter" hook to increase and descrease the count value.
  const incrementCountHandler = useCounter(setCount, count, "increase");
  const decrementCountHandler = useCounter(setCount, count, "decrease");

  return (
    <div className={style["requirementsWeb"]}>
      <p className={ctaStyle["cta__question"]}>
        Combien de Plateforme Web avez vous besoin de créer ?
      </p>
      <div className={style["requirementsWeb__container"]}>
        <div className={style["requirements__item"]} id="webPlatformsCount">
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
          <p className={style["requirements__item--name"]}>Plateforme Web</p>
        </div>
      </div>
    </div>
  );
};

export default WebRequirement;
