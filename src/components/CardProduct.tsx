import { ProductsData } from "../interfaces/Products";
// import { useLocation } from "react-router-dom";

interface ProductInterface {
  data: ProductsData[];
}

function CardProduct({ data }: ProductInterface) {
  // const location = useLocation();
  // let pathName = location.pathname;

  // let productPath = pathName.split("%");

  return (
    <div>
      {/* <p className="text-sm font-semibold leading-loose px-2">{`home${productPath}`}</p> */}
      {data.map((item) => (
        <div className="flex flex-col justify-center items-center mt-5" key={item.id}>
          
          {item.image ? (
            <img className="w-[500px] rounded-t-md" src={item.image} alt="" />
          ) : (
            "no hay imagen"
          )}

          <div className="flex flex-col justify-end py-5 px-4 gap-2 w-full">
            <h2 className="font-bold text-2xl">{item.title}</h2>
            <span className="text-[#FF6E06] font-bold">${item.price}</span>
            <p>{item.description}</p>

            <div className="w-full">
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

export default CardProduct;
