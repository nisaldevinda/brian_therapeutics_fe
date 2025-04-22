// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MyPage from "./pages/MyPage";

import HeroGradient from "./sections/HeroGradient";
import Mission1 from "./sections/Mission1";
import Mission2 from "./sections/Mission2";
import Science from "./sections/Science";
import Resources from "./sections/Resources";
import Investors from "./sections/Investors";

// Example additional pages
const Home = () => {
  return (
    <div>
      <HeroGradient />
      <Mission1 />
      <Science />
      <Resources />
      <Investors />
    </div>
  );
};

const About = () => {
  return (
    <div>
      <Mission2 />
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Page</h1>
      <p>Reach out to us through this contact page.</p>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
