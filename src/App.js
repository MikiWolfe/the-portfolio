import React, { useState }from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PortfolioBody from "./components/PortfolioBody";
import Footer from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Bio");
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <Header />
      <PortfolioBody currentPage={currentPage} handlePageChange={handlePageChange} />
      <Footer />
    </div>
  );
}
