import Nav from "../components/Nav";
import { useProducts } from "../services/ProductsService";
import { useParams } from "react-router-dom";
import { ProductsFilter } from "../Hooks/ProductsFilter";
import HypedCardProduct from "../components/HypedCardProduct";

function Consolas() {
  const { products } = useProducts();
  const { section } = useParams();

  const productFilter = ProductsFilter(products, section);

  return (
    <div>
      <Nav PropFunc={() => ({})} />

      <h2>{`Todos los productos de ${section}`}</h2>

      <section>
        <HypedCardProduct data={productFilter} />
      </section>
    </div>
  );
}

export default Consolas;
