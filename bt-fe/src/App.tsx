// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MyPage from "./pages/MyPage";
import logo from "../public/logo-white.png";

import HeroGradient from "./sections/HeroGradient";
import Mission1 from "./sections/Mission1";
import Mission2 from "./sections/Mission2";
import ScienceSec from "./sections/ScienceSec";
import ResourcesSec from "./sections/ResourcesSec";
import Investors from "./sections/Investors";
import ContactUs from "./sections/ContactUs";
import ContactUs2 from "./sections/ContactUs2";
import Footer from "./components/Footer";
import Team from "./sections/Team";
import CTA from "./sections/CTA";
import UseCases from "./sections/UseCases";
import Pipeline from "./sections/Pipeline";
import ResourcesExt from "./sections/ResourcesExt";

// Example additional pages
const Home = () => {
  return (
    <div>
      <HeroGradient />
      <Mission1 />
      <ScienceSec />
      <ResourcesSec />
      <Investors />
      <ContactUs2 />
      <Footer logo={logo} />
    </div>
  );
};

const About = () => {
  return (
    <div>
      <Mission2 />
      <Team />
      <CTA />
      <Footer logo={logo} />
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <ContactUs />
      <Footer logo={logo} />
    </div>
  );
};

const Science = () => {
  return (
    <div>
      <UseCases />
      <Pipeline />
      <Footer logo={logo} />
    </div>
  );
};

const Resources = () => {
  return (
    <div>
      <ResourcesSec />
      <ResourcesExt />
      <Footer logo={logo} />
    </div>
  );
};

// Navigation component
// const Navigation = () => {
//   return (
//     <nav>
//       <ul className="flex gap-4 p-4 bg-gray-100">
//         <li>
//           <Link to="/" className="text-blue-600 hover:underline">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/mypage" className="text-blue-600 hover:underline">
//             My Page
//           </Link>
//         </li>
//         <li>
//           <Link to="/about" className="text-blue-600 hover:underline">
//             About
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact" className="text-blue-600 hover:underline">
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      {/* <Navigation /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/science" element={<Science />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
