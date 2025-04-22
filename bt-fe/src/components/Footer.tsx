import React from "react";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import Text from "./text/TextComponent";

type FooterProps = {
  logo: string;
};

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Science", path: "/science" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" },
];

const Footer: React.FC<FooterProps> = ({ logo }) => {
  return (
    <footer className="w-full bg-[#565656] text-white px-4 py-8 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-10">
        {/* Row 1: Logo and Menu */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="h-14" />
            <Text variant="h4" className="ml-3 hidden sm:block">
              {logo.includes("/") ? "" : logo}
            </Text>
          </Link>

          {/* Menu Links */}
          <div className="flex flex-wrap gap-6 md:gap-8">
            {footerLinks.map((item, index) => (
              <Link key={index} to={item.path}>
                <Text
                  variant="body3"
                  className="text-white hover:text-gray-300"
                >
                  {item.name}
                </Text>
              </Link>
            ))}
          </div>
        </div>

        {/* Row 2: Address and LinkedIn */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm">
          <Text variant="body3" className="text-white mb-4 md:mb-0">
            Bryan Therapeutics Inc.,
            <br /> 2407 South Congress Ave E134, Austin, TX 78704
          </Text>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
            {/* <span>LinkedIn</span> */}
          </a>
        </div>

        {/* Row 3: Copyright and Policies */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-xs pt-4">
          <Text variant="body3" className="mb-2 md:mb-0 text-white">
            Site by Magic Unbound
          </Text>
          <div className="flex space-x-6">
            <Link to="/privacy">
              <Text variant="body3" className="text-white hover:text-gray-300">
                Privacy Policy
              </Text>
            </Link>
            <Link to="/terms">
              <Text variant="body3" className="text-white hover:text-gray-300">
                Terms & Conditions
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
