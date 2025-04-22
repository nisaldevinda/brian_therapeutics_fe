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
        bg-white/90 
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
            <img src={logo} alt="Logo" className="h-10" />
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
                className="py-2 border-b border-gray-100"
              >
                <Text
                  variant="body1"
                  className={`transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-blue-600"
                      : "hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Text>
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link to="/contact">
              <Button
                variant="button3"
                bgColor="bg-blue-600"
                color="text-white"
                onClick={onButtonClick}
              >
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>

        {/* Menu Items and Button - Desktop */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <div className="flex space-x-8">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.path}>
                <Text
                  variant="body2"
                  className={`transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-blue-600"
                      : "hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Text>
              </Link>
            ))}
          </div>
          <Link to="/contact" className="ml-4">
            <Button
              variant="button3"
              bgColor="bg-blue-600"
              color="text-white"
              onClick={onButtonClick}
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
