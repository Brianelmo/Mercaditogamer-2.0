interface Props {
    title:string
    text:string
    icon:string
}



function CardServices({title,text,icon}:Props) {
  return (
    <div className="bg-[#F7F8FA] w-[80%] py-4 px-8 flex items-center gap-8 flex-wrap rounded-lg shadow-md md:w-[30%] md:justify-center md:h-[10rem] md:px-4">
        <i className={`${icon} text-[#DC1B1B] text-xl md:text-3xl`}></i>
      <div>
        <span className="font-bold md:text-lg">{title}</span>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default CardServices
