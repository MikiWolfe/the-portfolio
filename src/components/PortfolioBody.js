import React from "react";
import Bio from "./pages/Bio";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

export default function PortfolioBody({ currentPage }) {
  const renderPage = () => {
    if (currentPage === "Bio") {
      return <Bio />;
    }
    if (currentPage === "Work") {
      return <Work />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  return <div>{renderPage()}</div>;
}
