import { ProductsData } from "../interfaces/Products.ts";
import { useState } from "react";
import { ProductsFilter } from "../Hooks/ProductsFilter.tsx";
import SetItemStorage from "../Utilities/SetItemStorage.tsx";

interface dataProduct {
  product: ProductsData[];
  nameSection: string | undefined;
}

function CardProductos({ product, nameSection }: dataProduct) {
  const producFilter = ProductsFilter(product, nameSection);

  const producSlice = producFilter.slice(0, 4);

  const [numero, setNumero] = useState<{ [id: number]: number }>({});

  const handleSuma = (id: number) => {
    setNumero((prevClick) => ({
      ...prevClick,
      [id]: (prevClick[id] || 0) + 1,
    }));
  };

  const handleResta = (id: number) => {
    setNumero((prevClick) => ({
      ...prevClick,
      [id]: Math.max((prevClick[id] || 0) - 1, 0),
    }));
  };

  return (
    <div className="flex gap-10 items-center justify-center mt-10 flex-col mb-10 w-[400px] flex-wrap md:flex-row md:w-full">
      {producSlice.map((item) => (
        <div className="bg-[#F7F8FA] shadow-md rounded-lg  w-[350px] md:w-[350px]" key={item.id}>
          <div className="flex justify-center w-full h-[20rem]">
            {item.image ? (
            <div className={`bg-cover bg-center w-full h-full rounded-t-lg`} style={{backgroundImage: `url(${item.image})`}}>
                
            </div>
            ) : (
              "no hay imagen"
            )}
          </div>
          <div className="mt-4 flex flex-col gap-6 px-4 py-6 w-full max-w-[400px]">
            <div className="flex justify-between">
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-[#908D8D]">
                <i className="fa-solid fa-star text-yellow-400"></i>3.5/5
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#DC1B1B] font-bold">${item.price}</p>
              <p className="text-[#DC1B1B] font-bold">-30% off</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-center gap-2 border-2 px-4 py-2 rounded-lg shadow-sm">
                <button onClick={() => handleResta(item.id)}> - </button>
                <span>{numero[item.id] || 0}</span>
                <button onClick={() => handleSuma(item.id)}> + </button>
              </div>
              <button
                onClick={() => SetItemStorage(item)}
                className="bg-[#FF6E06] px-4 py-2 rounded-lg text-white text-md"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardProductos;
