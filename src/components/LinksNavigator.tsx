
interface Props {
  name:string
  arrowUp:boolean;
}


function LinksNavigator({name}:Props) {
  return (
    <div>
     <span>{name} <i className="fa-solid fa-arrow-down"></i></span>
    </div>
  )
}

export default LinksNavigator
