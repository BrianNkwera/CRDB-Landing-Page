import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import samia from "../../assets/images/samia.webp";
import ndinga from "../../assets/images/ndinga.webp";

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sample data - you can replace with your own content
  const items: CarouselItem[] = [
    {
      id: 1,
      title: "Samia Infrastructure Financing",
      description:
        "Explore breathtaking mountain landscapes and pristine wilderness",
      image: samia,
    },
    {
      id: 2,
      title: "Ndinga na Mkwanja Mwaka Mzima",
      description: "Fanya miamala kwa SimBanking ukiwa na Smartphone au Kiswaswadu",
      image: ndinga,
    },
  ];

  // Create extended items array for seamless circular transition
  const extendedItems = [...items, items[0]];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (currentIndex === items.length - 1) {
      // Move to the duplicate first slide
      setCurrentIndex(items.length);
      setTimeout(() => {
        // After animation completes, jump to actual first slide without animation
        setCurrentIndex(0);
        setIsTransitioning(false);
      }, 500);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [items.length, currentIndex, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (currentIndex === 0) {
      // Jump to the duplicate first slide without animation
      setCurrentIndex(items.length);
      setTimeout(() => {
        // Then animate to the last actual slide
        setCurrentIndex(items.length - 1);
        setIsTransitioning(false);
      }, 50);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [items.length, currentIndex, isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, isAutoPlaying]);

  return (
    <div className="relative w-full overflow-hidden bg-white mb-16">
      {/* Main carousel container */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {/* Slides */}
        <div
          className={`flex h-full transition-transform duration-500 ease-in-out ${
            isTransitioning ? "" : "transition-none"
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {extendedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-full h-full relative"
            >
              {/* Content overlay */}
              <div
                className="absolute inset-0"
                style={{ background: `url(${item.image})`, backgroundSize: "cover" }}
              >
                <div className="flex items-center max-w-8xl mx-auto sm:mt-36 mt-12">
                  <div className="col-span-12 md:col-span-8 max-w-md mx-2">
                    <h2 className="text-4xl sm:text-5xl font-bold text-green-900">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                      {item.description}
                    </p>
                    <div className="mt-5 sm:mt-8">
                      <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-200">
                        JISAJILI SASA
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-300 transition-all duration-200 hover:scale-110"
        >
          <FontAwesomeIcon icon="chevron-left" className="text-3xl" />
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-300 transition-all duration-200 hover:scale-110"
        >
          <FontAwesomeIcon icon="chevron-right" className="text-3xl" />
        </button>
      </div>

    </div>
  );
}

export { Carousel };
