import { Link } from "react-router-dom";

interface Props {
  title: string;
  img: string;
  list: string[];
  link: string;
}

function AllCategoriesCard({ title, img, list, link }: Props) {
  return (
    <div className="border-2 w-10/12 flex flex-col text-center items-center rounded-lg pb-4 shadow-md max-w-[400px]">
      <Link to={link}>
        <div>
          <img className="w-full rounded-t-lg" src={img} alt="" />
        </div>
        <h3 className="text-xl font-bold p-2 pt-4">{title}</h3>
        <div className="flex p-2 gap-4 w-full max-h-[100px] justify-center">
          {list.map((item) => (
            <ul className="flex gap-4">
              <li className="text-sm text-[#908D8D] cursor-pointer hover:text-[#DC1B1B] transition-all">
                {item}
              </li>
            </ul>
          ))}
        </div>
      </Link>
    </div>
  );
}

export default AllCategoriesCard;
