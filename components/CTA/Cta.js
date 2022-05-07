import { useContext } from "react";
import Image from "next/image";

import { CtaContext } from "../../context/ctaContext";
import CtaBasicDetails from "./CtaBasicDetails"; // component for Page 0.
import CtaTextArea from "./CtaTextArea"; // component for page 1.
import CtaProjectNeeds from "./CtaProjectNeeds"; // component for page 2.
import MobileRequirements from "./Requirements/Mobile"; // component for page 3
import WebRequirement from "./Requirements/Web"; // component for page 4
import VideoRequirement from "./Requirements/Video"; // component for page 5.
import CtaBudget from "./CtaBudget";
import CtaTotal from "./CtaTotal";
import getStripe from "../../lib/getStripe";

import logo from "../../images/form/logo.png";

import style from "../../styles/components/Cta.module.scss";

// main CTA component which combines all other components
const Cta = (props) => {
  // importing all the required required variables and functions from the "CtaContext"
  const { currentCtaNumber, setCurrentCtaNumber, currentFormData } =
    useContext(CtaContext);

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ currentFormData }),
    });

    if (response.status === 500) return;

    const data = await response.json();

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  // function to increment the "currentCtaNumber" on the click of the button
  const incrementCtaPageHandler = () => {
    if (currentCtaNumber < 8) {
      setCurrentCtaNumber((currentCtaNumber += 1));
    } else {
      handleCheckout();
    }
  };

  // variable to hold cta text
  let ctaText = "";

  //variable to hold button text
  let buttonText = "";

  // setting the boolean of whether the current page number is 0
  const isInitialPage = currentCtaNumber === 0;

  // changing the CTA text based on page number,
  if (isInitialPage) {
    ctaText =
      "Remplissez le formulaire pour obtenir un ordre de prix et un de nos experts vous contactera pour l&#39;élaboration de votre projet. Nous avons hâte de vous rejoindre dans votre nouvelle aventure ! Demandez un devis";
  } else {
    ctaText =
      "Remplissez le formulaire pour obtenir un ordre de prix et un de nos experts vous contactera pour l’élaboration de votre projet. Nous avons hâte de vous rejoindre dans votre nouvelle aventure !";
  }

  // changing the button text bsaed on teh page number
  if (isInitialPage) {
    buttonText = "Commencer";
  } else if (currentCtaNumber === 6) {
    buttonText = "Étape finale";
  } else if (currentCtaNumber === 7) {
    buttonText = "Calculer le prix";
  } else if (currentCtaNumber === 8) {
    buttonText = 1600;
  } else {
    buttonText = "Suivant";
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
      <div
        className={style["cta__form"]}
        style={{
          backgroundColor:
            currentCtaNumber < 3 && currentCtaNumber < 6 ? "#f1f4ff" : "#fff",
          boxShadow:
            currentCtaNumber > 0 ? "0 0.1rem 1rem rgb(1, 65, 248, .8)" : "",
        }}
      >
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
          <div className={style["cta__mobileRequirements"]}>
            {currentCtaNumber === 3 && <MobileRequirements />}
          </div>
          <div className={style["cta__webRequirements"]}>
            {currentCtaNumber === 4 && <WebRequirement />}
          </div>
          <div className={style["cta__videoRequirements"]}>
            {currentCtaNumber === 5 && <VideoRequirement />}
          </div>
          <div className={style["cta__budget"]}>
            {currentCtaNumber === 6 && <CtaBudget />}
          </div>
          <div className={style["cta__calculate"]}>
            {currentCtaNumber === 7 && (
              <div>
                <p className={style["cta__question"]}>
                  Selon les champs que vous avez remplis, votre projet
                  repésenterait un montant de production d’environ :
                </p>
              </div>
            )}
          </div>
          <div className={style["cta__total"]}>
            {currentCtaNumber === 8 && <CtaTotal />}
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
              {buttonText}
            </button>
            {isInitialPage && <p>Accéder au formulaire</p>}
            {currentCtaNumber === 6 && <p>Félicitations !</p>}
            {currentCtaNumber === 8 && <p>Appeller au +33 7 50 50 21 31</p>}
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
