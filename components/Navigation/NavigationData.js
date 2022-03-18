import { AiFillHome } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import { RiPencilRuler2Fill } from "react-icons/ri";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { RiCustomerServiceFill } from "react-icons/ri";

export const navigationMenuItems = [
  {
    id: 1,
    icon: <AiFillHome />,
    text: "Accueil",
  },
  {
    id: 2,
    icon: <HiDocumentText />,
    text: "Devis",
  },
  {
    id: 3,
    icon: <RiPencilRuler2Fill />,
    text: "Cas d’étude",
  },
  {
    id: 4,
    icon: <AiTwotoneThunderbolt />,
    text: "Souscription",
  },
  {
    id: 5,
    icon: <AiFillCheckCircle />,
    text: "Services",
  },
  {
    id: 6,
    icon: <RiCustomerServiceFill />,
    text: "Contact",
  },
];
