import LinksFooter from './LinksFooter'

function Footer() {
  return (
    <div>
       <footer className="flex flex-col gap-20 mt-20 mb-10 md:flex-row ">
        <div className="px-4 flex flex-col gap-4 justify-center items-center text-center">
          <h3 className="text-2xl font-bold">
            Mercadito <span className="text-[#FF6E06]">Gamer</span>
          </h3>
          <p className="text-[#908D8D]">
            Encuentras tus articulos geek favoritos en nuestra web, pensada para
            nuestros usuarios{" "}
          </p>
          <div className="text-xl flex gap-4">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-5">
          <LinksFooter
            title="Customer"
            list={[
              "My Account",
              "Track Your Order",
              "Customer Service",
              "Term Of Use",
              "Help & Support",
            ]}
          />
          <LinksFooter
            title="Company"
            list={[
              "About Us",
              "Search Terms",
              "Shipping Guide",
              "Side Map",
              "Carriers",
              "Contact Us",
            ]}
          />
          <LinksFooter
            title="Quick Links"
            list={[
              "Figures",
              "Consolas",
              "Games",
              "Accesorios",
              "Coleccionables",
            ]}
          />
        </div> 
      </footer>
    </div>
  )
}

export default Footer
