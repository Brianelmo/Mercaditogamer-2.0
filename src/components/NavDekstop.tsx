import { useState } from "react";
import CartHomeMobile from "./CartHomeMobile";
import Links from "./LinkNavMob";

function NavDekstop() {
  const [modalCart, setModalCart] = useState(false);

  const showModal = () => {
    setModalCart(!modalCart);
  };

  return (
    <div className="flex">
      <Links name="Home" icon="fa-solid fa-house" url="/" />
      <div className="relative flex flex-col">
        <Links
          name="Carrito"
          icon="fa-solid fa-cart-shopping"
          func={showModal}
        />
        <div className="md:absolute md:z-10 md:top-[3rem] md:right-[10rem] md:w-[10rem]">
          {modalCart && <CartHomeMobile func={showModal} />}
        </div>
      </div>
      <Links name="Contact" icon="fa-solid fa-phone" />
    </div>
  );
}

export default NavDekstop;
