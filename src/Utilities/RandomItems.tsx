import { ProductsData } from "../interfaces/Products";

export const randomItem = (array: ProductsData[]) => {
  const randomItem = array.sort(() => 0.5 - Math.random());
  return randomItem.slice(0, 4);
};
