import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Banner from "./banner/Banner";
import OurService from "./ourService/OurService";
import OurCompany from "./ourCompany/OurCompany";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <OurService />
      <OurCompany />
      <Footer />
    </>
  );
};

export default Home;
