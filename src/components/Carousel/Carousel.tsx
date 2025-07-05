import {
  useState,
  useEffect,
  useCallback,
  cloneElement,
  Children as ReactChildren,
  type ReactElement,
  type ReactNode,
  type CSSProperties,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CarouselProps {
  children: ReactElement[];
  slidesPerView?: number;
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

interface SlideProps {
  children: ReactNode;
  className?: String;
  style?: CSSProperties;
}

function Slide({ children, className = "" }: SlideProps) {
  return (
    <div className={`flex-shrink-0 w-full h-full relative ${className}`}>
      {children}
    </div>
  );
}

function Carousel({
  children,
  slidesPerView = 1,
  className = "",
  autoPlay = false,
  autoPlayInterval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Ensure children is an array
  const slides = ReactChildren.toArray(children) as ReactElement[];
  const totalSlides = slides.length;

  // Calculate the maximum index based on slides per view
  const maxIndex = Math.max(0, totalSlides - slidesPerView);

  // Create extended items array for seamless circular transition
  const extendedSlides = [
    ...slides
      .slice(-slidesPerView)
      .map((slide, index) =>
        cloneElement(slide, { key: `prev-${slide.key || index}` })
      ), // Last slidesPerView slides at the beginning
    ...slides.map((slide, index) =>
      cloneElement(slide, { key: `main-${slide.key || index}` })
    ), // Main slides
    ...slides
      .slice(0, slidesPerView)
      .map((slide, index) =>
        cloneElement(slide, { key: `next-${slide.key || index}` })
      ), // First slidesPerView slides at the end
  ];

  //   // Create extended items array for seamless circular transition
  //   const extendedItems = [...items, items[0]];

  const nextSlide = useCallback(() => {
    if (isTransitioning || totalSlides <= slidesPerView) return;
    setIsTransitioning(true);

    if (currentIndex >= maxIndex) {
      // Move to the duplicate first slide
      setCurrentIndex(maxIndex + 1);
      setTimeout(() => {
        // After animation completes, jump to actual first slide without animation
        setCurrentIndex(0);
        setIsTransitioning(false);
      }, 500);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [maxIndex, currentIndex, isTransitioning, totalSlides, slidesPerView]);

  const prevSlide = useCallback(() => {
    if (isTransitioning || totalSlides <= slidesPerView) return;
    setIsTransitioning(true);

    if (currentIndex <= 0) {
      // Jump to the duplicate last slide without animation
      setCurrentIndex(-1);
      setTimeout(() => {
        // Then animate to the last actual slide
        setCurrentIndex(maxIndex);
        setIsTransitioning(false);
      }, 50);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [maxIndex, currentIndex, isTransitioning, totalSlides, slidesPerView]);

  //    const goToSlide = (index: number) => {
  //     if (isTransitioning || index === currentIndex || totalSlides <= slidesPerView) return;
  //     setIsTransitioning(true);
  //     setCurrentIndex(index);
  //     setTimeout(() => setIsTransitioning(false), 500);
  //   };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && totalSlides > slidesPerView) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, nextSlide, totalSlides, slidesPerView]);

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
  }, [nextSlide, prevSlide /*isAutoPlaying*/]);

  // Calculate slide width based on slides per view
  const slideWidth = 100 / slidesPerView;

  return (
    <div
      className={`${className} relative w-full overflow-hidden bg-white mb-16`}
    >
      {/* Main carousel container */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {/* Slides */}
        <div
          className={`flex h-full transition-transform duration-500 ease-in-out ${
            isTransitioning ? "" : "transition-none"
          }`}
          style={{
            /*transform: `translateX(-${currentIndex * 100}%)`*/
            transform: `translateX(-${
              (currentIndex + slidesPerView) * slideWidth
            }%)`,
            //width: `${(extendedSlides.length * 100) / slidesPerView}%`
          }}
        >
          {extendedSlides.map((slide) => {
            const slideProps = slide.props as SlideProps;
            return cloneElement(slide, {
              style: {
                width: `${slideWidth}%`,
                ...(slideProps.style || {}),
              },
              className: `${
                slideProps.className || ""
              } flex-shrink-0 h-full relative`,
            } as Partial<SlideProps>);
          })}
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

export { Carousel, Slide };
