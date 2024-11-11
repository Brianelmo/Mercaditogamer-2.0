interface buttonConf {
  name: string;
  style: string;
  icon?:string 
  func?: () => void;
}

function Button({ name , style, icon, func }: buttonConf) {
  return (
    <div className={style}>
      <button onClick={() => func}>
        {name} 
      </button>
      <i className={icon}></i>
    </div>
  );
}

export default Button;
