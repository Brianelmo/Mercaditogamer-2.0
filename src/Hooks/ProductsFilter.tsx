import { ProductsData } from "../interfaces/Products";

export const StarWarsFilter = (products: ProductsData[]) => {
  return products.filter((product) => product.section == "Star Wars");
};

export const ProductsFilter = (
  products: ProductsData[],
  section: string | undefined
) => {
  return products.filter((product) => product.section == section);
};

export const ProductFilter = (
  products: ProductsData[],
  productSection: number
) => {
  return products.filter((product) => product.id == productSection);
};

export const ProducRelatedFilter = (
  products: ProductsData[],
  productSection: string | undefined,
  productId: number | undefined
) => {
  return products.filter(
    (product) => product.section === productSection && product.id !== productId
  );
};
