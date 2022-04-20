import style from "./Cta.module.scss";

const CtaTextArea = () => {
  return (
    <>
      <p>Décrivez votre projet. En quoi consiste ce que vous imaginez ?</p>
      <textarea
        className={style["cta__form--textarea"]}
        id="description"
      ></textarea>
    </>
  );
};

export default CtaTextArea;
