import { useProducts } from "../services/ProductsService";
import { useParams } from "react-router-dom";
import { ProductsFilter } from "../Hooks/ProductsFilter";
import HypedCardProduct from "../components/HypedCardProduct";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Consolas() {
  const { products } = useProducts();
  const { section } = useParams();

  const productFilter = ProductsFilter(products, section);

  return (
    <div>
      <NavBar />
      <h2 className="p-5 text-xl">{`Todos los productos de ${section}`}</h2>

      <section>
        <HypedCardProduct data={productFilter} />
      </section>

      <Footer />
    </div>
  );
}

export default Consolas;
