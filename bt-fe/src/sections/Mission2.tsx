import Text from "../components/text/TextComponent";
import Navbar from "../components/Navbar";

const Mission2 = () => {
  return (
    <>
      <Navbar
        logo="/logo.png"
        buttonText="Contact Us"
        onButtonClick={() => console.log("Button clicked")}
      />
      <div className="container max-w-7xl mx-auto px-4 py-8 md:py-20 flex flex-col gap-6 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-10">
          <Text variant="h2" color="text-[#2E4EA1]" align="center">
            Our Mission
          </Text>
          <Text variant="body2" color="text-[#535353]" align="center">
            Our mission is to transform lives through groundbreaking research
            and the development of drugs that produce and restore nitric oxide
            in the human body. We believe in a future where safe and effective
            therapies that get to the root cause of disease will eliminate human
            disease and suffering. Our commitment to advancing the understanding
            of nitric oxide's role in cardiovascular health and chronic diseases
            is unwavering. With the visionary leadership of Dr. Nathan Bryan, we
            aim to lead the way in nitric oxide research and its applications in
            human therapeutics.
          </Text>
        </div>
        <img
          src="/images/video-thumbnail.webp"
          alt="Product showcase"
          className="w-full"
        />
        <div className="flex flex-col gap-4 md:gap-10">
          <Text variant="h3" color="text-[#2E4EA1]" align="center">
            Dr. Nathan Bryan
          </Text>
          <div className="flex flex-col md:flex-row gap-4 md:gap-20">
            <Text variant="body2" color="text-[#535353]">
              Dr. Bryan earned his undergraduate Bachelor of Science degree in
              Biochemistry from the University of Texas at Austin and his
              doctoral degree from Louisiana State University School of Medicine
              in Shreveport where he was the recipient of the Dean’s Award for
              Excellence in Research. <br />
              <br />
              He pursued his post-doctoral training as a Kirschstein Fellow at
              Boston University School of Medicine in the Whitaker
              Cardiovascular Institute. After a two year post-doctoral
              fellowship, in 2006 Dr. Bryan was recruited to join faculty at the
              University of Texas Health Science Center at Houston by Ferid
              Murad, M.D., Ph.D., 1998 Nobel Laureate in Medicine or Physiology.{" "}
              <br />
              <br />
              Dr. Bryan has been involved in nitric oxide research for the past
              20 years and has made many seminal discoveries in the field. His
              many seminal discoveries have resulted dozens of issued US and
              International patents and the product technology resulting from
              his discoveries and inventions has improved patient care
              worldwide.
            </Text>
            <Text variant="body2" color="text-[#535353]">
              Dr. Bryan is a successful entrepreneur and Founder of HumanN, Inc,
              Pneuma Nitric Oxide, LLC, Nitric Oxide Innovations, LLC, Bryan
              Nitriceuticals, LLC and Bryan Therapeutics, Inc. <br />
              <br />
              His companies and product technology are responsible for more than
              one billion dollars in product sales worldwide. Most recently, Dr.
              Bryan serves as Founder and CEO of Bryan Therapeutics, Inc., a
              privately-held, clinical-stage biopharmaceutical company that is
              actively engaged in the discovery and development of nitric
              oxide-based therapies. <br />
              <br />
              BTI has active drug development programs in heart disease,
              Alzheimers’ Disease and topical drugs for diabetic ulcer and
              non-healing wounds. Dr. Bryan is an international leader in
              molecular medicine and nitric oxide biochemistry.
            </Text>
          </div>
          <div className="flex flex-row md:flex-col gap-4 md:gap-20"></div>
        </div>
      </div>
    </>
  );
};

export default Mission2;
