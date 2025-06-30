import { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Category from "../components/Category";

function Products() {

  const categoryRef = useRef(null);

  return (
    <>
      <Header />
      <Category categoryRef={categoryRef} />
      <Footer />
    </>
  );
}

export default Products;
