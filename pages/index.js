import { Fragment, useEffect, useState } from "react";

import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Packages from "../components/Packages/Packages";
import Refrence from "../components/Refrence/Refrence";

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
      </main>
    </Fragment>
  );
}
