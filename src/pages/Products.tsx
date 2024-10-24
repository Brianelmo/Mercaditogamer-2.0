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


  const productFilter = ProductFilter(products, id);

  const productRelated = ProducRelatedFilter(products, section);

  return (
    <div>
      <nav>
        <NavBar/>
      </nav>
      <section className="my-10">
        <CardProduct data={productFilter} />
      </section>

      <section className="flex flex-col justify-center gap-10">
        <h2 className="px-4 text-xl font-bold">Related Products</h2>
        <div className="flex flex-col gap-4">
          <HypedCardProduct data={productRelated} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Products;
