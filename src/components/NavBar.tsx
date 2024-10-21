import MenuMobile from "./MenuMobile"
import { useState } from "react"
import Nav from "./Nav"


function NavBar() { 

const [Menu, setMenu] = useState(false)  

const ShowMenu = () => {
  setMenu(!Menu) 
} 

  return (
    <div className="">
      {!Menu && <Nav PropFunc={ShowMenu}/>}
      <div className="flex w-full justify-between">
      {Menu && <MenuMobile PropFunc={ShowMenu}/>}
      </div>
    </div>
  )
}

export default NavBar 
