import React, { useState, useRef, useEffect } from "react";
import Text from "../components/text/TextComponent";
import Button from "../components/text/Button";
import CarouselItem from "../components/CarouselItem";

interface CarouselItemData {
  id: number;
  title: string;
  imageSrc: string;
  altText: string;
}

const Investors: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [itemsPerView, setItemsPerView] = useState<number>(3.5);
  const [itemWidth, setItemWidth] = useState<number>(0);

  // Sample data for carousel items
  const carouselItems: CarouselItemData[] = [
    {
      id: 1,
      title: "Events",
      imageSrc: "/images/carousel.webp",
      altText: "Q4 Earnings Report",
    },
    {
      id: 2,
      title: "Presentations",
      imageSrc: "/images/carousel.webp",
      altText: "Annual Financial Report",
    },
    {
      id: 3,
      title: "Press Releases",
      imageSrc: "/images/carousel.webp",
      altText: "Investor Presentation",
    },
    {
      id: 4,
      title: "SEC Filings",
      imageSrc: "/images/carousel.webp",
      altText: "ESG Report",
    },
    {
      id: 5,
      title: "Sample 1",
      imageSrc: "/images/carousel.webp",
      altText: "Shareholder Meeting",
    },
    {
      id: 6,
      title: "Sample 2",
      imageSrc: "/images/carousel.webp",
      altText: "Financial Outlook",
    },
  ];

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = (): void => {
      if (window.innerWidth < 640) {
        setItemsPerView(1.2); // Mobile: 1 item + peek
      } else if (window.innerWidth < 768) {
        setItemsPerView(2.2); // Small tablets: 2 items + peek
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2.5); // Tablets: 2.5 items
      } else {
        setItemsPerView(3.5); // Desktop: 3.5 items
      }
    };

    // Set initial value
    updateItemsPerView();

    // Update when window resizes
    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  // Calculate item width when carousel container changes
  useEffect(() => {
    if (carouselRef.current) {
      const calculateItemWidth = (): void => {
        const containerWidth = carouselRef.current?.clientWidth || 0;
        const newItemWidth = containerWidth / itemsPerView;
        setItemWidth(newItemWidth);
      };

      calculateItemWidth();
      window.addEventListener("resize", calculateItemWidth);

      return () => {
        window.removeEventListener("resize", calculateItemWidth);
      };
    }
  }, [carouselRef, itemsPerView]);

  const scrollCarousel = (direction: "left" | "right"): void => {
    if (carouselRef.current) {
      const calculatedItemWidth =
        itemWidth || carouselRef.current.clientWidth / itemsPerView;
      const newPosition =
        direction === "left"
          ? Math.max(scrollPosition - calculatedItemWidth, 0)
          : Math.min(
              scrollPosition + calculatedItemWidth,
              (carouselItems.length - itemsPerView) * calculatedItemWidth
            );

      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });

      setScrollPosition(newPosition);
    }
  };

  // Check if arrows should be disabled
  const isLeftDisabled = scrollPosition <= 0;
  const isRightDisabled =
    !!carouselRef.current &&
    scrollPosition >=
      (carouselItems.length - itemsPerView) *
        (carouselRef.current.clientWidth / itemsPerView);

  return (
    <>
      <div className="container max-w-7xl mx-auto px-4 py-6 md:py-12 lg:py-20 flex flex-col gap-4 md:gap-8 lg:gap-12 items-start">
        <Text variant="h2" color="text-[#2E4EA1]">
          Investors
        </Text>

        <div className="flex flex-col sm:flex-row justify-between w-full items-start gap-2 sm:gap-0">
          <Text
            variant="body2"
            color="text-[#535353]"
            className="text-center sm:text-left"
            align="left"
          >
            Financials, earnings updates, and more.
          </Text>
          <Button
            variant="button1"
            color="text-[#535353]"
            className="mt-2 sm:mt-0"
          >
            More
          </Button>
        </div>

        <div className="w-full relative ">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide snap-x scroll-smooth p-4 md:p-8 rounded-2xl bg-[#D9EBFF]"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {carouselItems.map((item) => (
              <div
                key={item.id}
                className="carousel-item flex-shrink-0 px-2"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <CarouselItem
                  title={item.title}
                  imageSrc={item.imageSrc}
                  altText={item.altText}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-start mt-4 gap-4">
            <button
              onClick={() => scrollCarousel("left")}
              className={`p-2 rounded-full focus:outline-none ${
                isLeftDisabled
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
              disabled={isLeftDisabled}
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              className={`p-2 rounded-full focus:outline-none ${
                isRightDisabled
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
              disabled={isRightDisabled}
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investors;
