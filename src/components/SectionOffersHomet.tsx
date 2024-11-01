import ButtonSectionHome from "./ButtonSectionHome.tsx";
import CardProductos from "./CardProductsHome.tsx";
import { useState } from "react";
import { ProductsData } from "../interfaces/Products.ts";

interface Props {
  product: ProductsData[];
}

function SectionOffersHomet({ product }: Props) {
  const [sectionProduct, setSectionProduct] = useState<string | null>(
    "Star Wars"
  );

  const changeSection = (event: React.MouseEvent<HTMLElement>) => {
    const name = event.currentTarget.dataset.name;

    if (name) {
      setSectionProduct(name);
    }
  };

  return (
    <div>
      <section className="p-5">
        <h2 className="text-xl font-bold">Nuestros Productos</h2>
        <div className="flex mt-2 items-center justify-center w-fit">
          <ButtonSectionHome
            name="Star Wars"
            funct={changeSection}
            dataName="Star Wars"
            style="rounded-l-lg"
          />
          <ButtonSectionHome
            name="Consolas"
            funct={changeSection}
            dataName="Consolas"
          />
          <ButtonSectionHome
            name="Mesa"
            funct={changeSection}
            dataName="Mesa"
            style="rounded-r-lg"
          />
        </div>

        <div className="flex justify-center ">
          <CardProductos product={product} nameSection={sectionProduct} />
        </div>
      </section>
    </div>
  );
}

export default SectionOffersHomet;
