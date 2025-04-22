import Text from "../components/text/TextComponent";
import Button from "../components/text/Button";

const Investors = () => {
  return (
    <>
      <div className="container max-w-7xl mx-auto px-4 py-8 md:py-20 flex flex-col gap-6 md:gap-15 items-start">
        <Text variant="h2" color="text-[#2E4EA1]">
          Investors
        </Text>

        <div className="flex flex-col md:flex-row justify-between w-full">
          <Text variant="body2" color="text-[#535353]" align="center">
            Financials, earnings updates, and more.
          </Text>
          <Button variant="button1" color="text-[#535353]" className="-mt-1">
            More
          </Button>
        </div>
      </div>
    </>
  );
};

export default Investors;
