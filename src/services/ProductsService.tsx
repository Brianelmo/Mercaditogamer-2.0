import axios from "axios";
import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { ProductsData } from "../interfaces/Products.ts";

interface DataProduct {
  products: ProductsData[];
}

interface childrenType {
  children: ReactNode;
}

const productContext = createContext<DataProduct | undefined>(undefined);

function ProductsService({ children }: childrenType) {
  const [products, setProducts] = useState<ProductsData[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://mercaditibackend-production.up.railway.app/products")
        setProducts(response.data);
      } catch (e) {
        console.log(e + 'error al traer los productos');
      }
    };

    fetchProducts();
  }, []);

  return (
    <productContext.Provider value={{ products }}>
      {children}
    </productContext.Provider>
  );
}

const useProducts = () => {
  const product = useContext(productContext);
  if (!product) {
    throw new Error("error en el producto");
  }
  return product;
};

export { ProductsService, useProducts, productContext };
