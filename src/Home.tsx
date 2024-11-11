import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HypedCardProduct from "./components/HypedCardProduct.tsx";
import CardServices from "./components/CardServices.tsx";
import { useProducts } from "./services/ProductsService.tsx";
import SectionOffersHomet from "./components/SectionOffersHomet.tsx";
import AllCategoriesCard from "./components/AllCategoriesCard.tsx";
import PlayImage from "./images/norbert-levajsics-dUx0gwLbhzs-unsplash.jpg";
import StarWarsImage from "./images/marius-haakestad-DivUXJCgiB8-unsplash.webp";
import TableGame from "./images/karthik-balakrishnan-NrS53eUKgiE-unsplash.webp";
import Footer from "./components/Footer.tsx";
import BotChatHome from "./components/BotChatHome.tsx";

function Home() {
  const { products } = useProducts();

  return (
    <>
      <header>
        <nav className="w-full">
          <NavBar />
        </nav>
        <div>
          <Hero />
        </div>
      </header>
      <main className="max-w-[1600px] m-auto overflow-hidden">
      <section className="services flex flex-col justify-center items-center mt-10 gap-10 md:flex-row md:px-10 md:mt-20">
        <CardServices
          icon="fa-solid fa-truck-fast"
          title="Envio Gratis"
          text="A partir de 12.000$"
        />
        <CardServices
          icon="fa-solid fa-credit-card"
          title="Compra con tu tarjeta"
          text="Visa / Mastercard"
        />
        <CardServices
          icon="fa-solid fa-shield-halved"
          title="Proteccion"
          text="Para todas las compras"
        />
        <CardServices
          icon="fa-solid fa-headset"
          title="Soporte 24/7"
          text="A su disposicion"
        />

        
      </section>
      <BotChatHome />

      <section className="hyped-products mt-40 mb-20 md:p-5">
        <h3 className="p-5 font-bold text-xl">Algunos productos</h3>
        <HypedCardProduct data={products} />
      </section>

      <section className="flex justify-center md:p-5">
      <SectionOffersHomet product={products} />
      </section>

      {/* <section className="w-full mb-10 mt-10">
        <h3 className="p-2 font-bold text-xl mb-5">Combos imperdibles</h3>
        <CarrouselHome/>
      </section>  */}

      <h3 className="p-5 font-bold text-xl">Todas las categorias</h3>
      <section className="flex flex-col gap-10 justify-center items-center mb-10 mt-5 flex-wrap md:flex-row md:gap-40 md:mt-20 md:mb-20">
        <AllCategoriesCard
          title="Consolas"
          list={["Juegos", "Consolas", "Controles", "Accesorios"]}
          img={PlayImage}
          link={`/productos/${"Consolas"}`}
        />
        <AllCategoriesCard
          title="Figuras"
          list={["Plasticas", "Impresion 3D", "Originales", "Exclusivas"]}
          img={StarWarsImage}
          link={`productos/${"Star Wars"}`}
        />

        <AllCategoriesCard
          title="Games"
          list={["Juegos", "Colecciones", "Cartas", "Para Familias"]}
          img={TableGame}
          link={`productos/${"Mesa"}`}
        />
      </section>

      </main>
      <section className="bg-gray-200 px-2 py-10 flex flex-col gap-6 justify-center items-center md:flex-row md:items-center md:gap-20">
        <div></div>
        <div>
          <h3 className="font-bold text-2xl">NewSletter</h3>
          <p className="text-base text-[#908D8D]">
            Sucribite para recibir novedades y ofertas
          </p>
        </div>

        <div className="flex items-center justify-center">
          <input
            className="rounded-l-md p-2 outline-none shadow-md"
            type="text"
            placeholder="Ingresa tu email"
          />
          <button className="bg-[#FF6E06] p-2 text-white rounded-r-md shadow-md">
            Suscribirse
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
