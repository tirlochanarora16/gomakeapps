import { useState } from "react";

import RequirementItem from "./Item";
import useCounter from "../../../hooks/Requirements/use-counter";

import ctaStyle from "../../../styles/components/Cta.module.scss";
import style from "../../../styles/components/Requirements.module.scss";

const VideoRequirement = () => {
  const [count, setCount] = useState(0);

  // using the "useCounter" hook to increase and descrease the count value.
  const incrementCountHandler = useCounter(setCount, count, "increase");
  const decrementCountHandler = useCounter(setCount, count, "decrease");
  return (
    <div className={style["requirementsVideo"]}>
      <p className={ctaStyle["cta__question"]}>
        Combien de différente(s) vidéo(s) avez-vous besoin d’avoir à disposition
        ?
      </p>
      <div className={style["requirementsMobile__container"]}>
        <RequirementItem
          decrementCountHandler={decrementCountHandler}
          incrementCountHandler={incrementCountHandler}
          text="Vidéo d’animation explicative"
          count={count}
          id="videosCount"
          css={{ width: "70%", margin: "auto" }}
        />
      </div>
    </div>
  );
};

export default VideoRequirement;
