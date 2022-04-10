import Image from "next/image";

import logo from "../../images/form/logo.png";

import style from "./Cta.module.scss";

const CtaFormInput = ({ type, placeholder, id }) => {
  return (
    <div className={style["cta__form--input"]}>
      <input
        type={type}
        placeholder={placeholder + (id !== "company" ? "*" : "")}
        required={id !== "company"}
      />
    </div>
  );
};

const Cta = (props) => {
  return (
    <div
      className={style.cta}
      style={{ marginTop: props.marginTop ? props.marginTop : "" }}
    >
      <div className={style["cta__head"]}>
        <Image src={logo} alt="go make apps logo" width={70} height={120} />
        <h1>
          QUEL EST CE <span>SUPER PROJET</span> QUE VOUS ENVISAGEZ ?
        </h1>
      </div>
      <div className={style["cta__form"]}>
        <form>
          <CtaFormInput type="text" id="name" placeholder="Nom" />
          <CtaFormInput type="text" id="firstName" placeholder="Prénom" />
          <CtaFormInput
            type="text"
            id="company"
            placeholder="Société (optionel)"
          />
          <CtaFormInput type="email" id="email" placeholder="Email" />
          <div className={style["cta__form--button"]}>
            <button type="submit">Commencer</button>
            <p>Accéder au formulaire</p>
          </div>
        </form>
      </div>
      <div className={style["cta__text"]}>
        <p>
          Remplissez le formulaire pour obtenir un ordre de prix et un de nos
          experts vous contactera pour l&#39;élaboration de votre projet. Nous
          avons hâte de vous rejoindre dans votre nouvelle aventure ! Demandez
          un devis
        </p>
      </div>
    </div>
  );
};

export default Cta;
