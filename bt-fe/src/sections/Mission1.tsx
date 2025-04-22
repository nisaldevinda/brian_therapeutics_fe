import Text from "../components/text/TextComponent";
import Button from "../components/text/Button";

const Mission1 = () => {
  return (
    <>
      <div className="h-auto md:h-screen w-screen bg-[#0E2154]">
        <div className="container max-w-7xl mx-auto px-4 py-8 md:py-20 flex flex-col gap-6 md:gap-15">
          <Text variant="h2" color="text-[#FFFFFF]">
            Our Mission
          </Text>
          <div className="w-full flex flex-col md:flex-row gap-8 md:gap-20">
            <img
              src="/images/mission.webp"
              alt="Product showcase"
              className="w-full md:w-[40%]"
            />
            <div className="w-full md:w-[60%] flex flex-col gap-6 md:gap-16">
              <div className="flex flex-col items-start gap-4 md:gap-6">
                <Text variant="body2" color="text-[#FFFFFF]">
                  Our mission is to transform lives through groundbreaking
                  research and the development of drugs that produce and restore
                  nitric oxide in the human body. We believe in a future where
                  safe and effective therapies that get to the root cause of
                  disease will eliminate human disease and suffering.
                </Text>
                <Button variant="button1" color="text-[#FFFFFF]">
                  What drives us
                </Button>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                <div className="w-full md:w-1/2 flex flex-col gap-2 md:gap-4">
                  <Text variant="body3" color="text-[#6BB0FF]">
                    Innovation
                  </Text>
                  <Text variant="body3" color="text-[#6BB0FF]">
                    We are committed to transforming lives through
                    groundbreaking research and natural products that generate
                    and restore nitric oxide in the human body.
                  </Text>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-2 md:gap-4">
                  <Text variant="body3" color="text-[#6BB0FF]">
                    Accessibility
                  </Text>
                  <Text variant="body3" color="text-[#6BB0FF]">
                    We believe in a future where health is accessible to all,
                    and we strive to make that future a reality.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission1;
