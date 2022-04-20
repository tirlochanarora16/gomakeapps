import { useContext } from "react";
import Image from "next/image";

import { CtaContext } from "./ctaContext";
import CTABasicDetails from "./CTABasicDetails"; // component for Page 0.
import CtaTextArea from "./CTATextArea"; // component for page 1.

import logo from "../../images/form/logo.png";

import style from "./Cta.module.scss";

// main CTA component which combines all other components
const Cta = (props) => {
  // importing all the required required variables and functions from the "CtaContext"
  const { currentCtaNumber, setCurrentCtaNumber, currentFormData } =
    useContext(CtaContext);

  console.log(currentFormData);

  // function to increment the "currentCtaNumber" on the click of the button
  const incrementCtaPageHandler = () =>
    setCurrentCtaNumber((currentCtaNumber += 1));

  // variable to hold cta text
  let ctaText = "";

  // changing the CTA text based on page number,
  if (currentCtaNumber === 0) {
    ctaText =
      "Remplissez le formulaire pour obtenir un ordre de prix et un de nos experts vous contactera pour l&#39;élaboration de votre projet. Nous avons hâte de vous rejoindre dans votre nouvelle aventure ! Demandez un devis";
  } else if (currentCtaNumber === 1) {
    ctaText =
      "Remplissez le formulaire pour obtenir un ordre de prix et un de nos experts vous contactera pour l’élaboration de votre projet. Nous avons hâte de vous rejoindre dans votre nouvelle aventure !";
  }

  return (
    <div
      className={style.cta}
      style={{ marginTop: props.marginTop ? props.marginTop : "" }}
    >
      <div className={style["cta__head"]}>
        {/* conditional rendering of the logo (only for page 0) */}
        {currentCtaNumber === 0 && (
          <Image src={logo} alt="go make apps logo" width={70} height={120} />
        )}
        <h1>
          QUEL EST CE <span>SUPER PROJET</span> QUE VOUS ENVISAGEZ ?
        </h1>
      </div>
      <div className={style["cta__form"]}>
        <form>
          {currentCtaNumber === 0 && <CTABasicDetails />}
          {currentCtaNumber === 1 && <CtaTextArea />}
          <div className={style["cta__form--button"]}>
            <button type="button" onClick={incrementCtaPageHandler}>
              Commencer
            </button>
            <p>Accéder au formulaire</p>
          </div>
        </form>
      </div>
      <div className={style["cta__text"]}>
        <p>{ctaText}</p>
      </div>
    </div>
  );
};

export default Cta;
