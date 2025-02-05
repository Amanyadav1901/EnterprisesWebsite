import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { client1, client2, client3, client4, client5 } from "../../../assets";
import "./embla.css";

const EmblaCarousel = () => {
  const data = [
    {
      imageUrl: client1,
    },
    {
      imageUrl: client2,
    },
    {
      imageUrl: client3,
    },
    {
      imageUrl: client4,
    },
    {
      imageUrl: client5,
    },
  ];
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1000 }),
  ]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data.map((index) => (
            <div className="embla__slide " key={index}>
              <div className="embla__slide__number">
                <img
                  src={index.imageUrl}
                  alt={index.imageUrl}
                  className=" object-center object-contain w-20 h-20"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
