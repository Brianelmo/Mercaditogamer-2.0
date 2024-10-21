interface Props {
    list:string[];
    title:string
}

function LinksFooter({list, title}:Props) {
  return (
    <div className="flex flex-col items-center p-4 justify-center">
      <h3 className="font-bold text-xl border-b-2 mb-2 inline border-b-[#908D8D]">{title}</h3>
      <div className="">
        <li className="list-none flex flex-wrap items-center justify-center gap-4">
            {list.map(item => (
                <ul key={item} className="text-[#908D8D] hover:border-b-2 hover:border-b-[#FF6E06] transition-all">{item}</ul>
            ))}
        </li>
      </div>
    </div>
  )
}

export default LinksFooter
