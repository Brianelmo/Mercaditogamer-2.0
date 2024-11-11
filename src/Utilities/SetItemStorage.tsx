import { ProductsData } from "../interfaces/Products";

function SetItemStorage(data: ProductsData) {
  const cart: ProductsData[] = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(data);
  localStorage.setItem("cart", JSON.stringify(cart));

  console.log("se agrego al carro")
}
export default SetItemStorage;
