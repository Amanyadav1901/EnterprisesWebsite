import React, { useEffect, useState } from "react";
import { client1, client2, client3, client4, client5 } from "../../assets";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [client1, client2, client3, client4, client5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div
      className="flex transition-transform duration-1000 ease-in-out space-x-2 w-full h-20 overflow-hidden "
      style={{ transform: `translateX(-${currentIndex * 200}%)` }}
    >
      <img key={1} src={client1} alt={`Slide ${1}`} />
      <img key={2} src={client2} alt={`Slide ${2}`} />
      <img key={3} src={client3} alt={`Slide ${3}`} />
      <img key={4} src={client4} alt={`Slide ${4}`} />
      <img key={5} src={client5} alt={`Slide ${5}`} />
    </div>
  );
}

export default ImageSlider;
