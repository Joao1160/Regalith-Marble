import Header from "../components/Header";
import Landing from "../components/Landing";
import Category from "../components/Category";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Info from "../components/Info";
import { useRef } from "react";
import AboutUs from "../components/AboutUs";


const Home = () => {
  const categoryRef = useRef(null);

  const scrollToCategory = () => {
    categoryRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header />
      <Landing scrollToCategory={scrollToCategory} />
      <AboutUs/>
      <Category categoryRef={categoryRef} />
      <Contact />
      <Info />
      <Footer />
    </>
  );
};

export default Home;
