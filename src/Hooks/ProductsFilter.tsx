import { ProductsData } from "../interfaces/Products";

export const StarWarsFilter = (products: ProductsData[]) => {
  return products.filter((product) => product.section == "Star Wars");
};

export const JuegosMesaFilter = (products: ProductsData[]) => {
return products.filter((product) => product.section == "Mesa");
}; 

export const ConsolasFilter = (
  products: ProductsData[],
  productSection: string | null
) => {
  return products.filter((product) => product.section == productSection);
};

export const ProductFilter = (
  products: ProductsData[],
    productSection: number
) => {
  return products.filter((product) => product.id == productSection);
}; 



export const ProducRelatedFilter = (
  products: ProductsData[],
  productSection: string | undefined
  ,productId: number | undefined
) => {
  return products.filter((product) => product.section === productSection && product.id !== productId );
};
