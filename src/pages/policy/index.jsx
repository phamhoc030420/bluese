import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";

const Policy = () => {
  return (
    <div>
      <Header />
      <main className="policy">
        <Title addClass={"policy__title"}>Privacy Policy/Security Policy</Title>
      </main>
      <Footer />
    </div>
  );
};

export default Policy;
