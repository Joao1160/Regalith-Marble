import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDetails from "../components/ProductDetails";
import data from "../data/marbles.json";

function Details() {
  const { id } = useParams();
  const marble = data.find((item) => item.id === parseInt(id));

  if (!marble) return <div>Product not found</div>;

  return (
    <>
      <Header />
      <ProductDetails marble={marble} />
      <Footer />
    </>
  );
}

export default Details;
