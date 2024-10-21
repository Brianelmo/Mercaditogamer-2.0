interface Props {
    title:string
    text:string
    icon:string
}



function CardServices({title,text,icon}:Props) {
  return (
    <div className="bg-[#F7F8FA] w-[80%] py-4 px-8 flex items-center gap-8 rounded-lg shadow-md">
        <i className={`${icon} text-[#DC1B1B] text-xl`}></i>
      <div>
        <span className="font-bold">{title}</span>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default CardServices
