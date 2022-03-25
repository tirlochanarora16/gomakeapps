import Image from "next/image";
import Link from "next/link";

import { FiPhoneCall } from "react-icons/fi";

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
      <p>
        Vous avez un projet de développement informatique ? Une idée
        d&#39;application Mobile ? N&#39;hésitez pas a nous contacter !
      </p>
      <p>
        Vous pouvez joindre GOMAKEAPPS au +33 (0)7 50 50 21 31 ou en remplissant
        un de nos formulaires. Nous prendrons contact avec vous dans les
        24heures.
      </p>
      <div className={style["form__contactForm--form"]}></div>
    </div>
  );
};

const Form = () => {
  return (
    <section className={style.form}>
      <FormCallButton />
      <ContactForm />
    </section>
  );
};

export default Form;
