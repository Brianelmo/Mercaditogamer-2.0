interface Props {
  name: string;
  funct: (event: React.MouseEvent<HTMLElement>) => void;
  dataName: string;
  style?: string;
}

function ButtonSectionHome({ name, funct, dataName, style }: Props) {
  return (
    <div>
      <button
        className={`text-sm border-r-2 px-2 py-2 shadow-md  bg-[#F7F8FA] hover:bg-[#FF6E06] hover:text-white transition-all min-w-[70px] ${style}`}
        data-name={dataName}
        onClick={funct}
      >
        {name}
      </button>
    </div>
  );
}

export default ButtonSectionHome;
