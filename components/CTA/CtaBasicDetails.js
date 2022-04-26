import style from "../../styles/components/Cta.module.scss";
import useCta from "../../hooks/use-cta";

// component for CTA Input
export const CtaFormInput = ({ type, placeholder, id }) => {
  // using the "useCta" hook to capture the form data
  const inputChangeHandler = useCta();

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
const CtaBasicDetails = () => {
  return (
    <>
      <CtaFormInput type="text" id="name" placeholder="Nom" />
      <CtaFormInput type="text" id="firstName" placeholder="Prénom" />
      <CtaFormInput type="text" id="company" placeholder="Société (optionel)" />
      <CtaFormInput type="email" id="email" placeholder="Email" />
    </>
  );
};

export default CtaBasicDetails;
