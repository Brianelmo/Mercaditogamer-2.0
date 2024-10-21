import { ProductsData } from "../interfaces/Products";

interface ProductsInfo {
  data: ProductsData[];
}

function RelatedProducts({ data }: ProductsInfo) {
  return (
    <div className="flex flex-col gap-10">
      {data.map((item) => (
        <div className="flex flex-col items-center gap-4">
          {item.image ? (
            <img className="w-1/2" src={item.image} alt="" />
          ) : (
            "No hay imagen"
          )}

          <div>
            <h3>{item.title}</h3>
            <span>{item.price}</span>
            <div>
              <button className="bg-[#FF6E06] px-6 py-2 text-white rounded-md shadow-md">
                Comprar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RelatedProducts;
