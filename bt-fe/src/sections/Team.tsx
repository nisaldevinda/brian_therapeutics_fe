import Text from "../components/text/TextComponent";

const teamMembers = [
  {
    name: "Dr. Nathan S. Bryan",
    designation: "Founder, Chairman, and CEO",
    image: "/team/1.webp",
  },
  {
    name: "Susan Kim Shaffer",
    designation: "Co-Founder & President",
    image: "/team/2.webp",
  },
  {
    name: "Alyssa Seidler",
    designation: "Director of Customer Service",
    image: "/team/3.webp",
  },
  {
    name: "Jenny Doe",
    designation: "Director of Finance",
    image: "/team/4.webp",
  },
  {
    name: "Dr. Nathan S. Bryan",
    designation: "Founder, Chairman, and CEO",
    image: "/team/1.webp",
  },
  {
    name: "Susan Kim Shaffer",
    designation: "Co-Founder & President",
    image: "/team/2.webp",
  },
  {
    name: "Alyssa Seidler",
    designation: "Director of Customer Service",
    image: "/team/3.webp",
  },
  {
    name: "Jenny Doe",
    designation: "Director of Finance",
    image: "/team/4.webp",
  },
];

const Team = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8 md:py-20 flex flex-col gap-6 md:gap-20 items-center">
      <Text variant="h2" color="text-[#2E4EA1]" align="center">
        Leadership Team
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 w-full">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-4"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-[220px] h-[220px] rounded-full object-cover mb-4"
            />
            <Text variant="h4" color="text-[#6BB0FF]" align="center">
              {member.name}
            </Text>
            <Text variant="body2" color="text-[#535353]" align="center">
              {member.designation}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
