import Text from "../components/text/TextComponent";
import Button from "../components/text/Button";

// Define interface for BlogCard props
interface BlogCardProps {
  title: string;
  image: string;
  description: string;
  readMoreLink: string;
}

// Blog Card Component with TypeScript
const BlogCard: React.FC<BlogCardProps> = ({
  title,
  image,
  description,
  readMoreLink,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full object-cover" />
      </div>
      <Text variant="h4" color="text-[#6BB0FF]">
        {title}
      </Text>
      <Text variant="body3" color="text-[#535353]">
        {description}
      </Text>
      <div>
        <Button
          variant="button1"
          color="text-[#535353]"
          onClick={() => (window.location.href = readMoreLink)}
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

// Define blog data interface
interface BlogData {
  title: string;
  image: string;
  description: string;
  readMoreLink: string;
}

const ResourcesSec2: React.FC = () => {
  // Sample blog data
  const blogs: BlogData[] = [
    {
      title: "Dr. Nathan S. Bryan Leads the Charge in Nitric Oxide Innovation",
      image: "/images/blog.webp",
      description:
        " Xraised highlights revolutionary advancements in nitric oxide technology by Dr. Nathan S. Bryan, a global leader in molecular medicine and biochemistry. Through his innovative research and entrepreneurial ventures, Dr. Bryan has successfully developed products that are transforming health outcomes across the globe. In an exclusive interview with Xraised, Dr. Nathan S. Bryan—renowned for his pioneering work in nitric oxide research—discussed his groundbreaking product technology that restores nitric oxide production in the body, addressing the root cause of age-related diseases. His innovative approach has led to the creation of products that significantly improve health, including supporting healthy blood pressure, enhancing sexual function, boosting cognition, and optimizing overall performance.",
      readMoreLink: "/blog/1",
    },
    {
      title:
        "Leader in Molecular Medicine Wants Nitric Oxide in the Hands of Every Person",
      image: "/images/blog.webp",
      description:
        "Today, Dr. Nathan S. Bryan, world-renowned molecular medicine and nitric oxide expert and founder of Pneuma Nitric Oxide, LLC and Bryan Nitriceuticals, LLC, announced a partnership with Berkeley Life, a practitioner-exclusive nitric oxide nutraceutical brand. Dr. Bryan and Berkeley Life share a mission to provide health care practitioners with an exclusive and efficacious nitric oxide product portfolio for use in patient protocols.  ",
      readMoreLink: "/blog/2",
    },
  ];

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
        <div className="flex flex-col md:flex-row gap-6 md:gap-30 w-full justify-center">
          <div className="w-full">
            <BlogCard {...blogs[0]} />
          </div>
          <div className="w-full">
            <BlogCard {...blogs[1]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourcesSec2;
