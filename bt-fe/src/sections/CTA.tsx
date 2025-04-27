import Text from "../components/text/TextComponent";
import Button from "../components/text/Button";

const CTA = () => {
  return (
    <>
      <div className="bg-[#D9EBFF]">
        <div className="container max-w-7xl mx-auto px-4 py-8 md:py-30 flex flex-col gap-6 md:gap-10 items-center">
          <Text variant="h3" color="text-[#2E4EA1]" align="center">
            Business development and partnerships
          </Text>

          <Text variant="body2" color="text-[#0E2154]" align="center">
            Get in touch with us using the form on our Contact Us page. <br />{" "}
            Our business development team will reach out to you with a reply.
          </Text>
          <Button
            variant="button3"
            bgColor="bg-[#2E4EA1] text-white"
            className="hover:bg-[#224EC4]"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </>
  );
};

export default CTA;
