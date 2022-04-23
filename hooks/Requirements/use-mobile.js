import { useContext } from "react";

import { CtaContext } from "../../context/ctaContext";

const useMobile = (setCount, count, type) => {
  const { setCurrentFormData } = useContext(CtaContext);

  if (type === "increase") {
    return (event) => {
      const parentID = event.target.parentElement.id;

      // increasing the count state
      setCount((previousCount) => previousCount + 1);

      // updating the form state to the latest available count
      setCurrentFormData((previousFormData) => {
        // updating the count of number of mobile applications required using the previous form state
        previousFormData.mobileApplicationsCount[parentID] = count + 1;
        return {
          ...previousFormData,
        };
      });
    };
  } else {
    return (event) => {
      const parentID = event.target.parentElement.id;

      // decreasing the count state
      setCount((previousCount) => previousCount - 1);

      // updating the form state to the latest available count
      setCurrentFormData((previousFormData) => {
        // updating the count of number of mobile applications required using the previous form state
        previousFormData.mobileApplicationsCount[parentID] = count - 1;
        return {
          ...previousFormData,
        };
      });
    };
  }
};

export default useMobile;
