import React from "react";
import Text from "../components/text/TextComponent";
import Button from "../components/text/Button";
import Navbar from "../components/Navbar";

// Define interface for blog content
interface BlogContent {
  title: string;
  excerpt: string;
  author: {
    name: string;
    position: string;
    image: string;
  };
  publishDate: string;
  mainImage: string;
  content: {
    paragraphs: string[];
    subheadings?: { title: string; text: string }[];
  };
  relatedLinks?: {
    title: string;
    url: string;
  }[];
}

interface ResourcesInnerProps {
  blogData: BlogContent;
}

const ResourcesInner: React.FC<ResourcesInnerProps> = ({ blogData }) => {
  const {
    title,
    excerpt,
    author,
    publishDate,
    mainImage,
    content,
    relatedLinks,
  } = blogData;

  return (
    <>
      <Navbar
        logo="/logo.png"
        buttonText="Contact Us"
        onButtonClick={() => console.log("Button clicked")}
      />
      <div className="container max-w-4xl mx-auto px-4 py-8 md:py-16">
        {/* Blog Header Section */}
        <div className="flex flex-col gap-6 mb-10">
          <Text variant="h2" color="text-[#2E4EA1]" className="mb-0 md:mb-8">
            {title}
          </Text>

          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={author.image}
                alt={author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Text
                variant="body3"
                color="text-[#6BB0FF]"
                className="font-medium"
              >
                {author.name}
              </Text>
              <Text variant="body3" color="text-[#535353]">
                {author.position} • {publishDate}
              </Text>
            </div>
          </div>

          <Text
            variant="body1"
            color="text-[#535353]"
            className="font-medium italic"
          >
            {excerpt}
          </Text>
        </div>

        {/* Main Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={mainImage}
            alt={title}
            className="w-full object-cover max-h-96"
          />
        </div>

        {/* Content Paragraphs */}
        <div className="flex flex-col gap-6 mb-10">
          {content.paragraphs.map((paragraph, index) => (
            <Text key={index} variant="body2" color="text-[#535353]">
              {paragraph}
            </Text>
          ))}

          {/* Subheadings if available */}
          {content.subheadings &&
            content.subheadings.map((subheading, index) => (
              <div key={index} className="my-4">
                <Text variant="h4" color="text-[#6BB0FF]" className="mb-2">
                  {subheading.title}
                </Text>
                <Text variant="body2" color="text-[#535353]">
                  {subheading.text}
                </Text>
              </div>
            ))}
        </div>

        {/* Related Links Section */}
        {relatedLinks && relatedLinks.length > 0 && (
          <div className="border-t border-gray-200 pt-8 mt-10">
            <Text variant="h4" color="text-[#2E4EA1]" className="mb-4">
              Related Resources
            </Text>
            <div className="flex flex-col gap-4">
              {relatedLinks.map((link, index) => (
                <div key={index}>
                  <Button
                    variant="button1"
                    color="text-[#535353]"
                    onClick={() => (window.location.href = link.url)}
                  >
                    {link.title}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-10">
          <Button
            variant="button1"
            color="text-[#535353]"
            onClick={() => window.history.back()}
          >
            Back to Resources
          </Button>
        </div>
      </div>
    </>
  );
};

// Example usage with sample data
const ResourcesInnerPage: React.FC = () => {
  // Sample blog data - in a real app, this would come from props or API
  const sampleBlogData: BlogContent = {
    title: "Dr. Nathan S. Bryan Leads the Charge in Nitric Oxide Innovation",
    excerpt:
      "Discover how revolutionary advancements in nitric oxide technology are transforming health outcomes globally.",
    author: {
      name: "Dr. Sarah Johnson",
      position: "Medical Editor",
      image: "/team/2.webp",
    },
    publishDate: "April 15, 2025",
    mainImage: "/images/blog.webp",
    content: {
      paragraphs: [
        "Xraised highlights revolutionary advancements in nitric oxide technology by Dr. Nathan S. Bryan, a global leader in molecular medicine and biochemistry. Through his innovative research and entrepreneurial ventures, Dr. Bryan has successfully developed products that are transforming health outcomes across the globe.",
        "In an exclusive interview with Xraised, Dr. Nathan S. Bryan—renowned for his pioneering work in nitric oxide research—discussed his groundbreaking product technology that restores nitric oxide production in the body, addressing the root cause of age-related diseases. His innovative approach has led to the creation of products that significantly improve health, including supporting healthy blood pressure, enhancing sexual function, boosting cognition, and optimizing overall performance.",
        'Dr. Bryan explained, "Nitric oxide is one of the most important molecules produced in the human body. It regulates most cellular functions and is responsible for delivering oxygen and nutrients to every cell in the body. Without adequate nitric oxide production, the body begins to break down."',
        "The importance of Dr. Bryan's work cannot be overstated. As people age, nitric oxide production naturally decreases, leading to various health issues. By the time individuals reach 40, they typically produce only about half the nitric oxide they did at age 20. By 70, that production can be as low as 15% of youthful levels.",
        "Dr. Bryan's technology effectively restores the body's ability to produce nitric oxide, providing a solution to this fundamental health challenge. His formulations have been clinically validated and have shown remarkable results in improving cardiovascular health, cognitive function, and overall wellness.",
      ],
      subheadings: [
        {
          title: "Revolutionary Impact on Healthcare",
          text: "The implications of Dr. Bryan's work extend far beyond individual health products. His research is reshaping how medical professionals approach age-related diseases and preventative care. By addressing nitric oxide deficiency as a root cause rather than treating symptoms, his methods represent a paradigm shift in healthcare.",
        },
        {
          title: "Future Directions",
          text: "Looking ahead, Dr. Bryan continues to expand the applications of his nitric oxide technology. Current research focuses on neurological conditions, immune system enhancement, and extended longevity. Each new application further demonstrates the foundational importance of nitric oxide to human health.",
        },
      ],
    },
    relatedLinks: [
      {
        title:
          "Leader in Molecular Medicine Wants Nitric Oxide in the Hands of Every Person",
        url: "/blog/2",
      },
      {
        title: "The Science Behind Nitric Oxide Supplementation",
        url: "/blog/3",
      },
    ],
  };

  return <ResourcesInner blogData={sampleBlogData} />;
};

export default ResourcesInnerPage;
