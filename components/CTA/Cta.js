import { useContext } from "react";
import Image from "next/image";

import { CtaContext } from "../../context/ctaContext";
import CtaBasicDetails from "./CtaBasicDetails"; // component for Page 0.
import CtaTextArea from "./CtaTextArea"; // component for page 1.
import CtaProjectNeeds from "./CtaProjectNeeds"; // component for page 2.

import logo from "../../images/form/logo.png";

import style from "./Cta.module.scss";

// main CTA component which combines all other components
const Cta = (props) => {
  // importing all the required required variables and functions from the "CtaContext"
  const { currentCtaNumber, setCurrentCtaNumber } = useContext(CtaContext);

  // function to increment the "currentCtaNumber" on the click of the button
  const incrementCtaPageHandler = () =>
    setCurrentCtaNumber((currentCtaNumber += 1));

  // variable to hold cta text
  let ctaText = "";

  // setting the boolean of whether the current page number is 0
  const isInitialPage = currentCtaNumber === 0;

  // changing the CTA text based on page number,
  if (currentCtaNumber === 0) {
    ctaText =
      "Remplissez le formulaire pour obtenir un ordre de prix et un de nos experts vous contactera pour l&#39;élaboration de votre projet. Nous avons hâte de vous rejoindre dans votre nouvelle aventure ! Demandez un devis";
  } else {
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
        {isInitialPage && (
          <Image src={logo} alt="go make apps logo" width={70} height={120} />
        )}
        <h1>
          QUEL EST CE <span>SUPER PROJET</span> QUE VOUS ENVISAGEZ ?
        </h1>
      </div>
      <div className={style["cta__form"]}>
        <form>
          <div className={style["cta__basicDetails"]}>
            {isInitialPage && <CtaBasicDetails />}
          </div>
          <div className={style["cta__textarea"]}>
            {currentCtaNumber === 1 && <CtaTextArea />}
          </div>
          <div className={style["cta__projectNeeds"]}>
            {currentCtaNumber === 2 && <CtaProjectNeeds />}
          </div>
          <div className={style["cta__form--button"]}>
            <button
              type="button"
              onClick={incrementCtaPageHandler}
              style={{
                backgroundImage: !isInitialPage
                  ? "linear-gradient(#0039ff,  #0039ff)"
                  : "",
              }}
            >
              {currentCtaNumber === 0 ? "Commencer" : "Suivant"}
            </button>
            {isInitialPage && <p>Accéder au formulaire</p>}
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
