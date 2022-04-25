import { useContext } from "react";

import { CtaContext } from "../../context/ctaContext";

const useCounter = (setCount, count, type) => {
  const { setCurrentFormData } = useContext(CtaContext);

  if (type === "increase") {
    return (event) => {
      const parentId = event.target.parentElement.id;

      setCount((count) => count + 1);
      setCurrentFormData((previousFormData) => {
        return { ...previousFormData, [parentId]: count + 1 };
      });
    };
  } else {
    return (event) => {
      const parentId = event.target.parentElement.id;

      setCount((count) => count - 1);
      setCurrentFormData((previousFormData) => {
        return { ...previousFormData, [parentId]: count - 1 };
      });
    };
  }
};

export default useCounter;
