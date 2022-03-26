import Image from "next/image";
import logo from "../../images/footer/logo.png";

import style from "./Footer.module.scss";

const FooterListItems = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style["footer__services"]}>
        <h3>Services</h3>
        <FooterListItems
          items={[
            "Développer une Application Mobile",
            "Créer un site internet",
            "Monter une vidéo de présentation d'acitivité",
            "Concevoir du contenu Design",
            "Référencement de site internet",
          ]}
        />
      </div>
      <div className={style["footer__society"]}>
        <h3>La Société</h3>
        <div className={style["footer__society--img"]}>
          <Image
            src={logo}
            width={110}
            height={140}
            alt="go make apps official logo"
          />
        </div>
        <p>Copyright © 2022 - GOMAKEAPPS.COM Tous droits résérvés</p>
      </div>
      <div className={style["footer__legal"]}>
        <h3>Legal</h3>
        <FooterListItems
          items={[
            "Condition Général d'Utilisation",
            "Mentions légales",
            "Politique de confidentialité",
          ]}
        />
      </div>
    </footer>
  );
};

export default Footer;
