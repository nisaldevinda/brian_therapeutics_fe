import Text from "../components/text/TextComponent";
import Button from "../components/text/Button";

const Resources = () => {
  return (
    <>
      <div className="container max-w-7xl mx-auto px-4 py-8 md:py-20 flex flex-col gap-6 md:gap-15 items-center">
        <Text variant="h2" color="text-[#2E4EA1]" align="center">
          Resources
        </Text>

        <Text variant="body2" color="text-[#535353]" align="center">
          Read though our Press Room for the latest insights into our research
          and our mentions in the media.
        </Text>
        <Button variant="button1" color="text-[#535353]">
          Browse
        </Button>
      </div>
    </>
  );
};

export default Resources;
