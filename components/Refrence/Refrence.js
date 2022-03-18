import Image from "next/image";

import { RiPencilRuler2Fill } from "react-icons/ri";
import Button from "../UI/Button";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import banner from "../../images/refrence/banner.png";
import phone1 from "../../images/refrence/phone1.png";
import phone2 from "../../images/refrence/phone2.png";
import phone3 from "../../images/refrence/phone3.png";
import phone4 from "../../images/refrence/phone4.png";
import logo from "../../images/navigation/logo.png";

import style from "./Refrence.module.scss";

const Refrence = () => {
  return (
    <section className={style.refrence}>
      <div className={style["refrence__head"]}>
        <RiPencilRuler2Fill />
        <h1>NOS CAS D&#39;ÉTUDES DE RÉFÉRENCE</h1>
      </div>
      <div className={style["refrence__container"]}>
        <div className={style["refrence__button--back"]}>
          <Button icon={<BsArrowLeft />} />
        </div>
        <div className={style["refrence__container--display"]}>
          <div className={style["refrence__container--display-img"]}>
            <Image src={banner} alt="banner img" />
          </div>
          <div className={style["refrence__container--display-title"]}>
            <p>JUDGE-FOOD Advisor App</p>
          </div>
          <Image src={logo} alt="go make apps logo" width={89} height={121} />
          <div className={style["refrence__container--display-images"]}>
            <Image src={phone1} alt="phone 1" />
            <Image src={phone2} alt="phone 2" />
            <Image src={phone3} alt="phone 3" />
            <Image src={phone4} alt="phone 4" />
          </div>
        </div>
        <div className={style["refrence__button--front"]}>
          <Button icon={<BsArrowRight />} />
        </div>
      </div>
    </section>
  );
};

export default Refrence;
