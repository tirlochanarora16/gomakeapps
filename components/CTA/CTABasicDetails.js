import { useContext } from "react";
import { CtaContext } from "./ctaContext";

import style from "./Cta.module.scss";

// component for CTA Input
const CtaFormInput = ({ type, placeholder, id }) => {
  // importing all the required required variables and functions from the "CtaContext"
  const { setCurrentFormData } = useContext(CtaContext);

  const inputChangeHandler = (event) => {
    // fetching the current form id and it's value
    const { id: targetId, value: targetValue } = event.target;

    // updating the form state by updating it's values
    setCurrentFormData((previousFormState) => {
      return { ...previousFormState, [targetId]: targetValue };
    });
  };

  return (
    <div className={style["cta__form--input"]}>
      <input
        type={type}
        id={id}
        placeholder={placeholder + (id !== "company" ? "*" : "")}
        required={id !== "company"}
        onChange={inputChangeHandler}
      />
    </div>
  );
};

// component that will be rendered on page 0.
const CTABasicDetails = () => {
  return (
    <>
      <CtaFormInput type="text" id="name" placeholder="Nom" />
      <CtaFormInput type="text" id="firstName" placeholder="Prénom" />
      <CtaFormInput type="text" id="company" placeholder="Société (optionel)" />
      <CtaFormInput type="email" id="email" placeholder="Email" />
    </>
  );
};

export default CTABasicDetails;
