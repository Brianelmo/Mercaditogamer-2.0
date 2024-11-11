import NavDekstop from "./NavDekstop";

type menuFunct = () => void;

interface Props {
  PropFunc: menuFunct;
}

const Nav: React.FC<Props> = ({ PropFunc }) => {
  return (
    <div className="flex w-full justify-between items-center p-5">
      <div className="flex items-center gap-2">
        <h3 className="font-bold text-[#FF6E06] md:text-2xl">
          Mercadito <span className="text-black">Gamer</span>
        </h3> 
        <i className="fa-solid fa-gamepad text-[#FF6E06] text-2xl"></i>
      </div>
      <div className="flex gap-2">
        <i
          onClick={PropFunc}
          className="fa-solid fa-bars cursor-pointer text-xl md:invisible"
        ></i>
      </div>
      <div className="hidden md:block">
      <NavDekstop />
      </div>
    </div>
  );
};

export default Nav;
