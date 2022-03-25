import { Fragment, useEffect, useState } from "react";
import Reviews from "../components/Reviews/Reviews";

import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Packages from "../components/Packages/Packages";
import Refrence from "../components/Refrence/Refrence";
import Services from "../components/Services/Services";
import Form from "../components/Form/Form";

export default function HomePage() {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPageHeight(window.scrollY);
    });
  });

  return (
    <Fragment>
      <main>
        <Navigation changeNavbar={pageHeight !== 0} />
        <Header />
        <Refrence />
        <Packages />
        <Services />
        <Reviews />
        <Form />
      </main>
    </Fragment>
  );
}
