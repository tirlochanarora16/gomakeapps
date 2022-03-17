import { Fragment, useEffect, useState } from "react";

import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";

export default function HomePage() {
  const [pageHeight, setPageHeight] = useState(null);

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
        <h2>Hello Woeokfo</h2>
        <h2>Hello Woeokfo</h2>
        <h2>Hello Woeokfo</h2>
        <h2>Hello Woeokfo</h2>
        <h2>Hello Woeokfo</h2>
        <h2>Hello Woeokfo</h2>
        <h2>Hello Woeokfo</h2>
        <h2>Hello Woeokfo</h2>
        <h2>Hello Woeokfo</h2>
        <h2>Hello Woeokfo</h2>
        <h2>Hello Woeokfo</h2>
        <h2>Hello Woeokfo</h2>
      </main>
    </Fragment>
  );
}
