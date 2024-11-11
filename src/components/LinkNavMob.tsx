

interface linkData {
  name:string
  icon:string  
  url?:string
  func?: () => void 
  number?:number
}


function Links({name,icon, url, func}:linkData) {
  return (
    <div>
      <div onClick={func} className="flex items-center gap-4 ml-6 cursor-pointer transition-all hover:-translate-y-1 hover:text-[#FF6E06]">
          <i className={`text-3xl ${icon}`}></i>
          <a href={url} className="text-xl font-bold cursor-pointer">{name}</a>
        </div>
    </div>
  )
}

export default Links
