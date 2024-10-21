type menuFunct = () => void;


interface Props { 
    PropFunc: menuFunct
}

const Nav: React.FC<Props> = ({PropFunc}) => {
  return (
    <div className="flex w-full justify-between items-center p-5">
      <div className="flex items-center">
        <input className="w-64 outline-none border-[#FF6E06] border-2 rounded-l-lg pl-2" type="text" placeholder="Buscar"/>
        <i className="fa-solid fa-magnifying-glass text-white cursor-pointer bg-[#FF6E06] p-[0.4rem] rounded-r-lg"></i>
      </div> 
      <div className="flex gap-2">
      <i onClick={PropFunc} className="fa-solid fa-bars cursor-pointer text-xl"></i> 
      </div>
    </div>
  )
}

export default Nav
