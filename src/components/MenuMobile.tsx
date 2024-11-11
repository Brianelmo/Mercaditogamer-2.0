import { useState, useEffect } from "react";
import CartHomeMobile from "./CartHomeMobile";
import Links from "./LinkNavMob";

type menuFunct = () => void;

interface Props {
  PropFunc: menuFunct;
}

const MenuMobile: React.FC<Props> = ({ PropFunc }) => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [cart, setCart] = useState([])

  const showCartFunc = () => {
    setShowCart(!showCart);
    setShowMenu(!showMenu);
  };


  useEffect(() => {
    const carStore = localStorage.getItem("cart");

    if (carStore) {
      setCart(JSON.parse(carStore));
    }
  }, []); 

  const cartLength = cart.length

  return (
    <div className="slide-animation  w-full h-screen">
      {showCart && <CartHomeMobile func={showCartFunc} />}
      {showMenu && (
        <div>
          <div className="flex justify-end">
            <i
              onClick={PropFunc}
              className="fa-solid fa-xmark mt-10 mr-10 text-2xl cursor-pointer"
            ></i>
          </div>
          <ul className="z-20 flex flex-col gap-12 m-0 p-0 border-b-2 border-gray-300 pb-10">
            <Links url="/" name="Home" icon="fa-solid fa-house" />
            <div className="flex items-center gap-2">
            <Links
              func={showCartFunc}
              name={`Carrito`}
              icon="fa-solid fa-cart-shopping"
            />
            {cartLength ? (
              <span className="bg-[#FF6E06] rounded-xl text-xl p-2"></span>
            ):''}
            </div>
          </ul>

          <ul className="flex flex-col gap-12 mt-10">
            <Links
              url="/products"
              name="Products"
              icon="fa-solid fa-box text-[#FF6E06]"
            />
            <Links url="/contact" name="Contact" icon="fa-solid fa-phone" />
            <Links
              url="/about"
              name="About Us"
              icon="fa-solid fa-users text-[#FF6E06]"
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuMobile;
