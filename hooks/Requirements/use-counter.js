import { useContext } from "react";

import { CtaContext } from "../../context/ctaContext";

const useCounter = (setCount, count, type) => {
  // importing form update state function from the context API
  const { setCurrentFormData } = useContext(CtaContext);

  // using "if else" block to determine whether to increase the count or to decrease it
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
