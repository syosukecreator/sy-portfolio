import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/Work";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter basename="/sy-portfolio">
      <header>
        <nav>
          <Link to="">Home</Link> | <Link to="/profile">Profile</Link> |{" "}
          <Link to="/work">Work</Link> | <Link to="/skills">Skills</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
