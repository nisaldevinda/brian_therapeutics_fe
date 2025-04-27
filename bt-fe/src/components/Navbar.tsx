import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Text from "./text/TextComponent";
import Button from "./text/Button";
import { Menu, X } from "lucide-react";

// Define the props type
type NavbarProps = {
  logo: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
};

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Science", path: "/science" },
  { name: "Resources", path: "/resources" },
];

const Navbar: React.FC<NavbarProps> = ({
  logo,
  buttonText = "Contact Us",
  onButtonClick,
  className = "",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full px-4 pt-6">
      {/* Floating container for desktop */}
      <nav
        className={`
        mx-auto 
        max-w-7xl 
        bg-white/60 
        backdrop-blur-sm 
        rounded-2xl 
        shadow-md 
        py-4 
        px-6 
        flex 
        flex-col 
        md:flex-row 
        md:items-center 
        md:justify-between
        ${className}
      `}
      >
        {/* Logo and mobile menu button container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-12" />
            <Text variant="h4" className="ml-3 hidden sm:block">
              {logo.includes("/") ? "" : logo}
            </Text>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Items and Button - Mobile */}
        <div
          className={`
            md:hidden 
            flex 
            flex-col 
            mt-4
            ${isMenuOpen ? "block" : "hidden"}
          `}
        >
          <div className="flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="py-2 border-b border-white/20"
              >
                <Text
                  variant="body1"
                  className={`transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-[#1A1A1A]"
                      : "hover:text-[#1D1D1F]"
                  }`}
                >
                  {item.name}
                </Text>
              </Link>
            ))}
            {/* Contact link for mobile - styled like other links */}
            <Link
              to="/contact"
              className="py-2 border-b border-white/20"
              onClick={onButtonClick}
            >
              <Text
                variant="body1"
                className="transition-colors duration-300 text-[#E00047] hover:text-[#E00047]/80"
              >
                {buttonText}
              </Text>
            </Link>
          </div>
        </div>

        {/* Menu Items and Button - Desktop */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <div className="flex space-x-8">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.path} className="relative group">
                <Text
                  variant="body2"
                  className={`transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-[#1A1A1A]"
                      : "text-[#1A1A1A] opacity-70 hover:opacity-100"
                  }`}
                >
                  {item.name}
                </Text>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#1A1A1A] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"></div>
              </Link>
            ))}
          </div>
          <Link to="/contact" className="ml-4">
            <Button
              variant="button2"
              bgColor=""
              color="text-[#E00047] hover:border-1 hover:border-[#E00047] rounded-lg"
              onClick={onButtonClick}
              className="md:text-xl"
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
