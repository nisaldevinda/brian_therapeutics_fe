import Text from "../components/text/TextComponent";
import Button from "../components/text/Button";

const ScienceSec = () => {
  return (
    <>
      <div className="h-auto  w-screen bg-[#AE0339]">
        <div className="container max-w-7xl mx-auto px-4 py-8 md:py-20 flex flex-col gap-6 md:gap-15 items-start">
          <div className="w-full md:w-[40%] flex flex-col items-start gap-4 md:gap-6">
            <Text variant="h2" color="text-[#FFFFFF]" className="mb-6 md:mb-14">
              The Science
            </Text>
            <Text variant="body2" color="text-[#FFFFFF]">
              Nitric oxide (NO) is a vital molecule produced by the human body,
              recognized for its critical role in cellular functions, including
              vasodilation and oxygen delivery; its significance was underscored
              when three US scientists received the Nobel Prize in Physiology or
              Medicine in 1998 for its discovery. Our R&D efforts are focused on
              bringing various Nitric Oxide-based treatments to market, with
              each at various stages of regulatory approval.
            </Text>
            <Button variant="button1" color="text-[#FFFFFF]">
              What drives us
            </Button>
          </div>
        </div>
        <div className="flex justify-end mt-0 md:mt-[-20%]">
          <img
            src="/images/science.webp"
            alt="Product showcase"
            className="w-[80vw] md:w-[40vw] 2xl:w-[35vw]"
          />
        </div>
      </div>
    </>
  );
};

export default ScienceSec;
