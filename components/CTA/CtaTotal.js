import style from "../../styles/components/Cta.module.scss";

const CtaTotal = () => {
  return (
    <div>
      <p className={style["cta__question"]}>
        Selon les champs que vous avez remplis, votre projet repésenterait un
        montant de production d’environ :
      </p>
      <div className={style["cta__total--buttons"]}>
        <div className={style["cta__total--quote"]}>
          <button type="button">Télécharger Devis</button>
        </div>
        <div className={style["cta__total--paynow"]}>
          <button type="button">
            Payer Maintenant <span>Réservation à 2000,00€</span>
          </button>
        </div>
        <div className={style["cta__total--appointment"]}>
          <button type="button">Prendre rendez-vous</button>
        </div>
      </div>
    </div>
  );
};

export default CtaTotal;
