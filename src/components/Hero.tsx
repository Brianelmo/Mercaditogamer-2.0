import headerImg from "../images/lorenzo-herrera-p0j-mE6mGo4-unsplash.webp";
import Button from "./Button";

function Hero() {
  return (
    <div className="brightness-90 w-full h-[350px] bg-center bg-cover md:h-[400px]" style={{backgroundImage: `url('${headerImg}')`}}>
      <div className="p-5 gap-4 flex flex-col justify-center items-start w-full h-[350px]">
        <p className="text-white text-2xl font-bold md:text-4xl">Tenemos todo tipo de figura!</p>
        <p className="text-white  text-xl font-bold md:text-3xl">Obtene tus figuras con descuento</p>
        <Button name="Comprar" style="bg-[#FF6E06] text-white py-2 px-6 font-bold rounded-md"/>
      </div>
    </div>
  );
}

export default Hero;
