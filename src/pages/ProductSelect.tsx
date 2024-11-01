import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useProducts } from "../services/ProductsService";
import { ProductFilter, ProducRelatedFilter } from "../Hooks/ProductsFilter";
import CardProduct from "../components/CardProduct";
import HypedCardProduct from "../components/HypedCardProduct";
import NavBar from "../components/NavBar";

function Products() {
  const { products } = useProducts();

  const { id, section } = useParams();

  const numId = Number(id);

  const productFilter = ProductFilter(products, numId);

  const productRelated = ProducRelatedFilter(products, section, numId);

  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <section className="my-10">
        <CardProduct data={productFilter} />
      </section>

      <section className="flex flex-col justify-center gap-5">
        <h2 className="px-4 text-xl font-bold">Productos relacionados</h2>
        <div className="flex flex-col gap-4 border-t-2">
          <HypedCardProduct data={productRelated} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Products;
