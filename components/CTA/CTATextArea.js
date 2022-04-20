import style from "./Cta.module.scss";

const CtaTextArea = () => {
  return (
    <>
      <p>Décrivez votre projet. En quoi consiste ce que vous imaginez ?</p>
      <textarea id="description" rows={10}></textarea>
    </>
  );
};

export default CtaTextArea;
