import style from "../../styles/components/Cta.module.scss";
import useCta from "../../hooks/use-cta";

const CtaTextArea = () => {
  // using the "useCta" hook to capture the form data
  const inputChangeHandler = useCta();

  return (
    <>
      <p className={style["cta__question"]}>
        Décrivez votre projet. En quoi consiste ce que vous imaginez ?
      </p>
      <textarea
        id="description"
        rows={10}
        onChange={inputChangeHandler}
      ></textarea>
    </>
  );
};

export default CtaTextArea;
