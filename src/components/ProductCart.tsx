import { useEffect, useState } from "react";
import { ProductsData } from "../interfaces/Products";

function ProductCart() {
  const [cart, setCart] = useState<ProductsData[]>([]);

  useEffect(() => {
    const carStore = localStorage.getItem("cart");

    if (carStore) {
      setCart(JSON.parse(carStore));
    }
  }, []); 

  const removeItemCart = (productid:number) => {
    const newCart = cart.filter((product) => product.id !== productid);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  return (
    <div>
      {cart.length === 0 ? (
        <p className="p-5 font-bold">No hay nada en el carrito</p>
      ) : (
        <div className="h-[70px]">
          {cart.map((item) => (
            <div className="p-5 flex flex-col gap-4 justify-center font-bold text-lg">
              <div className="flex justify-between items-center">
                {item.image ? (
                  <img className="w-[150px] rounded-lg" src={item.image} alt="" />
                ) : (
                  "no hay image"
                )}
                <p className="text-[#FF6E06]">${item.price}</p>
              </div> 
              <div className="flex items-center justify-between">
                <p>{item.title}</p>
                <i onClick={() => removeItemCart(item.id)} className="fa-solid fa-trash hover:text-red-500"></i>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductCart;
