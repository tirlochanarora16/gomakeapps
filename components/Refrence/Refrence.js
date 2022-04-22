import Image from "next/image";

import { RiPencilRuler2Fill } from "react-icons/ri";
import Button from "../UI/Button";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import banner from "../../images/refrence/banner.png";
import phone1 from "../../images/refrence/phone1.png";
import phone2 from "../../images/refrence/phone2.png";
import phone3 from "../../images/refrence/phone3.png";
import phone4 from "../../images/refrence/phone4.png";

import ruler from "../../images/refrence/ruler.png";
import logo from "../../images/navigation/logo.png";

import style from "../../styles/components/Refrence.module.scss";

const Refrence = () => {
  return (
    <section className={style.refrence}>
      <div className={style["refrence__head"]}>
        <div className={style["refrence__head--img"]}>
          <Image alt="ruler" src={ruler} width={45} height={45} />
        </div>
        <h1>NOS CAS D&#39;ÉTUDES DE RÉFÉRENCE</h1>
      </div>
      <div className={style["refrence__container"]}>
        <div className={style["refrence__button--back"]}>
          <Button icon={<BsArrowLeft />} />
        </div>
        <div className={style["refrence__container--display"]}>
          <div className={style["refrence__container--display-img"]}>
            <Image src={banner} alt="banner img" width={150} height={40} />
          </div>
          <div className={style["refrence__container--display-title"]}>
            <p>JUDGE-FOOD Advisor App</p>
          </div>
          <div className={style["refrence__container--display-logo"]}>
            <Image src={logo} alt="go make apps logo" width={89} height={100} />
          </div>
          <div className={style["refrence__container--display-images"]}>
            <div>
              <Image src={phone1} alt="phone 1" />
            </div>
            <div>
              <Image src={phone2} alt="phone 2" />
            </div>
            <div>
              <Image src={phone3} alt="phone 3" />
            </div>
            <div>
              <Image src={phone4} alt="phone 4" />
            </div>
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
