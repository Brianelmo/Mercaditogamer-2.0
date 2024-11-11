import ProductCart from "./ProductCart";

interface carProps {
  func: () => void;
}

function CartHomeMobile({ func }: carProps) {
  return (
    <div className="w-full h-screen overflow-y-auto md:bg-white md:h-[500px] md:rounded-lg md:w-[400px] md:overflow-y-auto">
      <div className="flex items-center w-full justify-between p-5">
        <div className="flex items-center gap-2">
        <h3 className="text-2xl font-bold">Carrito</h3>
        <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <i
          onClick={func}
          className="fa-solid fa-xmark text-2xl cursor-pointer"
        ></i>
      </div>

      <div>
        <ProductCart/>
      </div>
    </div>
  );
}

export default CartHomeMobile;
