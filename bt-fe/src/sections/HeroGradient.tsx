import Navbar from "../components/Navbar";
import Text from "../components/text/TextComponent";
import Button from "../components/text/Button";
import { useEffect, useState } from "react";

const HeroGradient = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: 'url("/bg/home-hero.webp")' }}
    >
      {/* Overlay to improve text readability */}
      <div className="absolute inset-0 bg-black opacity-0"></div>

      <Navbar
        logo="/logo.png"
        buttonText="Contact Us"
        onButtonClick={() => console.log("Button clicked")}
      />

      <div className="relative h-full w-full">
        <div className="container max-w-7xl mx-auto flex flex-col items-center md:items-start h-full py-16 px-4">
          {/* Text content */}
          <div className="h-[80%] w-full md:w-[60%] text-white z-10 flex flex-col gap-8 items-start justify-start md:justify-center">
            <Text variant="h1" color="text-white-100">
              Next-gen clinical advancement.
            </Text>
            <Text variant="body2" color="text-white-100">
              At Bryan Therapeutics, our mission is to perfect clinical
              therapies for safe and effective use, so they can be used to
              deliver life changing outcomes to people around the world.
            </Text>
            <Button
              variant="button1"
              color="text-white/70 hover:text-white/100"
            >
              See how far we've come
            </Button>
          </div>

          {/* Image positioned at bottom right with animation */}
          <div className="absolute bottom-0 md:bottom-36 right-0 z-1 h-auto max-h-[50%]">
            <img
              src="/bg/logo.webp"
              alt="Product showcase"
              className={`w-[80vw] md:w-[40vw] 2xl:w-[35vw] object-contain transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 transform-none"
                  : "opacity-0 -rotate-30 translate-x-10"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroGradient;
