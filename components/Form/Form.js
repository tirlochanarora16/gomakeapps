import Image from "next/image";
import Link from "next/link";

import { FiPhoneCall } from "react-icons/fi";
import { AiFillFacebook, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

import logo from "../../images/form/logo.png";

import style from "./Form.module.scss";

const FormCallButton = () => {
  return (
    <div className={style["form__contact"]}>
      <div className={style["form__contact--icon"]}>
        <FiPhoneCall />
      </div>
      <div className={style["form__contact--text"]}>
        <Link href="#">Appler l&#39;agence</Link>
      </div>
    </div>
  );
};

const FormInput = ({ type, placeholder, id, label }) => {
  return (
    <div className={style[`form__contactForm--form-input`]}>
      <label htmlFor={id}>{label}</label>
      <input type={type} placeholder={placeholder} id={id} required />
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className={style["form__contactForm"]}>
      <div className={style["form__contactForm--img"]}>
        <Image
          src={logo}
          width={130}
          height={175}
          alt="go make apps offical logo"
        />
      </div>
      <div className={style["form__contactForm--para"]}>
        <p>
          Vous avez un projet de développement informatique ? Une idée
          d&#39;application Mobile ? N&#39;hésitez pas a nous contacter !
        </p>
        <p>
          Vous pouvez joindre GOMAKEAPPS au +33 (0)7 50 50 21 31 ou en
          remplissant un de nos formulaires. Nous prendrons contact avec vous
          dans les 24heures.
        </p>
      </div>

      <div className={style["form__contactForm--text"]}>
        <h2>Contactez-nous</h2>
      </div>
      <div className={style["form__contactForm--form"]}>
        <form>
          <div className={style["form__contactForm--form-name"]}>
            <FormInput
              type="text"
              placeholder="Entrez votre nom"
              id="name"
              label="Votre nom"
            />
          </div>
          <div className={style["form__contactForm--form-phone"]}>
            <FormInput
              type="tel"
              placeholder="Entrez vos coordonées"
              id="phone"
              label="Votre numéro de téléphone"
            />
          </div>
          <div className={style["form__contactForm--form-email"]}>
            <FormInput
              type="email"
              placeholder="Entrez votre adresse e-mail"
              id="email"
              label="Votre e-mail"
            />
          </div>

          <div className={style["form__contactForm--form-textarea"]}>
            <label htmlFor="Message">Message</label>
            <textarea
              id="message"
              placeholder="Entrez votre message"
              rows={7}
            ></textarea>
          </div>
          <div className={style["form__contactForm--form-button"]}>
            <button>ENVOYER</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div className={style["form__socialMedia"]}>
      <h2>Retrouvez nous sur les réseaux sociaux !</h2>
      <div className={style["form__socialMedia--icons"]}>
        <div className={style["form__socialMedia--icon"]}>
          <AiFillFacebook />
          <Link href="#">Facebook</Link>
        </div>
        <div className={style["form__socialMedia--icon"]}>
          <AiFillYoutube />
          <Link href="#">YouTube</Link>
        </div>
        <div className={style["form__socialMedia--icon"]}>
          <AiFillInstagram />
          <Link href="#">Instagram</Link>
        </div>
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <section className={style.form}>
      <FormCallButton />
      <ContactForm />
      <SocialMedia />
    </section>
  );
};

export default Form;
