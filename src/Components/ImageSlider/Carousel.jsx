import { useState, useRef, useEffect } from "react";

import { client1, client2, client3, client4, client5 } from "../../assets";

const Carousel = () => {
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
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveNext();
    }, 1000);

    return () => {
      setCurrentIndex(0);
      clearInterval(interval);
    }; // Cleanup the interval on component unmount
  }, []);

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="relative z-20 carousel my-2 mx-auto ">
      <div className="w-full h-20 relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 space-x-10"
        >
          <img
            key={1}
            src={client1}
            alt={`Slide ${1}`}
            className=" object-center object-contain w-20 h-20"
          />
          <img
            key={2}
            src={client2}
            alt={`Slide ${2}`}
            className=" object-center object-contain w-20 h-20"
          />
          <img
            key={3}
            src={client3}
            alt={`Slide ${3}`}
            className=" object-center object-contain w-20 h-20"
          />
          <img
            key={4}
            src={client4}
            alt={`Slide ${4}`}
            className=" object-center object-contain w-20 h-20"
          />
          <img
            key={5}
            src={client5}
            alt={`Slide ${5}`}
            className=" object-center object-contain w-20 h-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
