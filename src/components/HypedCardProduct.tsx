import { ProductsData } from "../interfaces/Products";
import { Link } from "react-router-dom";
import { randomItem } from "../Utilities/RandomItems";

interface Props {
  data: ProductsData[];
}

function HypedCardProduct({ data }: Props) {
  const productsRandom = randomItem(data);

  return (
    <div className="flex justify-center items-center flex-col gap-10 pt-4">
      {productsRandom.map((product: ProductsData) => (
        <div
          className="w-10/12 max-w-[400px] flex flex-col justify-center items-center gap-6 bg-[#F7F8FA] shadow-md rounded-lg"
          key={product.id}
        >
          <div className="flex justify-center">
            {product.image ? (
              <img
                className="w-full h-auto rounded-t-lg"
                src={product.image}
                alt=""
              />
            ) : (
              "no hay imagen"
            )}
          </div>
          <div className="flex flex-col justify-start w-10/12 pb-6 gap-2">
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-[#FF6E06]">Caracteristicas</h4>
              <span className="text-sm text-[#908d8d]">
                {product.description}
              </span>
            </div>
            <Link
              to={`/products/${product.section}/${product.title}/${product.id}`}
              className="border-2 py-2 px-4 text-[#908d8d] text-sm w-1/2 border-[#908d8d] rounded-md flex justify-center items-center gap-2 hover:border-[#FF6E06] hover:text-[#FF6E06] transition-all cursor-pointer"
            >
              Ver mas
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HypedCardProduct;
