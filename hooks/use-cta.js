import react, { useContext } from "react";

import { CtaContext } from "../components/CTA/ctaContext";

const useCta = () => {
  // importing the context variables and functions
  const { currentFormData, setCurrentFormData } = useContext(CtaContext);

  //   console.log(currentFormData);

  return (event) => {
    // extracting out the id and the value of the textarea.
    const { id: targetId, value: targetValue } = event.target;

    // updating the form state.
    setCurrentFormData((previousState) => {
      return { ...previousState, [targetId]: targetValue };
    });
  };
};

export default useCta;
