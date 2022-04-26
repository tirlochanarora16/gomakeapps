import { CtaFormInput } from "./CtaBasicDetails";

import style from "../../styles/components/Cta.module.scss";

const CtaBudget = () => {
  return (
    <>
      <p className={style["cta__question"]}>
        Quel est votre budget pour ce super projet ?
      </p>
      <div>
        <CtaFormInput type="number" id="budget" placeholder="Votre Budget €" />
        <CtaFormInput type="tel" id="phone" placeholder="Téléphone" />
        <CtaFormInput type="text" id="siret" placeholder="Siret" />
      </div>
    </>
  );
};

export default CtaBudget;
