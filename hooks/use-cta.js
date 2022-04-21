import react, { useContext } from "react";

import { CtaContext } from "../context/ctaContext";

const useCta = () => {
  // importing the context variables and functions
  const { currentFormData, setCurrentFormData } = useContext(CtaContext);

  // console.log(currentFormData);

  return (event) => {
    // console.log(event);
    // extracting out the id and the value of the input field.
    const { id: targetId, value: targetValue, type } = event.target;

    // input value, conditional logic for maniplulating input value based on whether it's checkbox or not.
    const value = type !== "checkbox" ? targetValue : event.target.checked;

    // updating the form state.
    setCurrentFormData((previousState) => {
      return {
        ...previousState,
        [targetId]: value,
      };
    });
  };
};

export default useCta;
