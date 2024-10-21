import { Link } from "react-router-dom"

interface linkData {
  name:string
  icon:string  
  url:string
}


function Links({name,icon, url}:linkData) {
  return (
    <div>
      <div className="flex items-center gap-4 ml-6 cursor-pointer transition-all hover:-translate-y-1 hover:text-[#FF6E06]">
          <i className={`text-3xl ${icon}`}></i>
          <Link to={url} className="text-xl font-bold cursor-pointer"> {name} </Link>
        </div>
    </div>
  )
}

export default Links
