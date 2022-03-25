import Image from "next/image";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import star from "../../images/reviews/star.png";
import Button from "../UI/Button";

import style from "./Reviews.module.scss";

const Reviews = () => {
  return (
    <section className={style.reviews}>
      <div className={style["reviews__head"]}>
        <div className={style["reviews__icon"]}>
          <Image src={star} width={127} height={100} alt="star logo" />
        </div>
        <h1>AVIS CLIENTS</h1>
      </div>
      <div className={style["reviews__container"]}>
        <div className={style["reviews__button--back"]}>
          <Button icon={<BsArrowLeft />} />
        </div>
        <div className={style["reviews__user"]}>
          <div className={style["reviews__user-review"]}>
            <p>
              Entreprise très professionnelle, ils conçoivent des applications
              extraordinaires. Je suis très satisfaite de leurs services de
              développement et design. Je vous les recommande sans hésiter!
            </p>
          </div>
          <div className={style["reviews__user-name"]}>
            <h2>Héloïse P.</h2>
          </div>
        </div>
        <div className={style["reviews__button--forward"]}>
          <Button icon={<BsArrowRight />} />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
