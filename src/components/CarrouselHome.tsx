import { useEffect, useState } from "react";
import imageCarrousel1 from "../images/Post de Facebook Pack de Marketing Elegante Neon Negro Blanco Fucsia (3).png";
import imageCarrousel2 from "../images/igor-karimov-fXmmSz5KkO8-unsplash.jpg";

function CarrouselHome() {
  const imageArray = [imageCarrousel1, imageCarrousel2];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextImage, 7000);

    return () => clearInterval(interval);
  }, [imageIndex]);

  const nextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const NextImageManual = () => {
    const newIndex = (imageIndex + 1) % imageArray.length;
    setImageIndex(newIndex);
  };

  const prevImageManual = () => {
    const newIndex = (imageIndex - 1 + imageArray.length) % imageArray.length;
    setImageIndex(newIndex);
  };

  return (
    <div className="carousel flex flex-col items-center justify-center gap-4">
      <div className="image-container">
        {imageArray.map((image, index) => (
          <div>
            <img
              src={image}
              key={index}
              alt=""
              className={index === imageIndex ? "active" : ""}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-10 mr-5">
        <i
          onClick={prevImageManual}
          className="fa-solid fa-arrow-left bg-[#F7F8FA] text-black shadow-lg p-2 rounded-full"
        ></i>
        <i
          onClick={NextImageManual}
          className="fa-solid fa-arrow-right bg-[#F7F8FA] text-black shadow-lg p-2 rounded-full"
        ></i>
      </div>
    </div>
  );
}

export default CarrouselHome;
