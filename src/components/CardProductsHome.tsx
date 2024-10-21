import { ProductsData } from "../interfaces/Products.ts";
import Button from "./Button.tsx";
import { useState } from "react";
import { ConsolasFilter } from "../Hooks/ProductsFilter.tsx";

interface dataProduct {
  product: ProductsData[];
  nameSection: string | null;
}

function CardProductos({ product, nameSection }: dataProduct) { 


  const producFilter = ConsolasFilter(product, nameSection) 

  const producSlice = producFilter.slice(0 , 3)
 
  

  const [numero, setNumero] = useState<{[id:number]:number}>({}); 

  const handleSuma = (id:number) => {
    setNumero(prevClick => ({
      ...prevClick,
      [id]: (prevClick[id] || 0) + 1
    }));
  } 


  const handleResta = (id:number) => {
    setNumero(prevClick => ({
      ...prevClick,
      [id]:Math.max((prevClick[id] || 0) - 1, 0)
    }));
  }



  return (
    <div className="flex gap-10 items-center justify-center mt-10 flex-col mb-10 max-w-[400px]">
      {producSlice.map((item) => (
        <div className="bg-[#F7F8FA] shadow-md rounded-lg " key={item.id}>
          <picture>
            {item.image ? (
              <img
                className="rounded-t-lg w-full max-w-[400px]"
                src={item.image}
                alt={`imagen de ${item.title}`}
              />
            ) : (
              "no hay imagen"
            )}
          </picture>
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
               <Button name="Add to Cart" style="bg-[#FF6E06] px-4 py-2 rounded-lg text-white text-md"/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardProductos;
