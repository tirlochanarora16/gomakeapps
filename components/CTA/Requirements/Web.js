import { useState } from "react";

import useCounter from "../../../hooks/Requirements/use-counter";

import ctaStyle from "../../../styles/components/Cta.module.scss";
import style from "../../../styles/components/Requirements.module.scss";
import RequirementItem from "./Item";

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
        <RequirementItem
          decrementCountHandler={decrementCountHandler}
          incrementCountHandler={incrementCountHandler}
          text="Plateforme Web"
          count={count}
          id="webPlatformsCount"
        />
      </div>
    </div>
  );
};

export default WebRequirement;
