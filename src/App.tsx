import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Chronology from "./components/Chronology";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

const App = () => {
  return (
    <BrowserRouter basename="/sy-portfolio">
      <header>
        <nav>
          <Link to="/profile">Profile</Link> | <Link to="/chronology">Chronology</Link> |{" "}
          <Link to="/skills">Skills</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/chronology" element={<Chronology />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </main>
      <footer>
        <p>
          Contact: syosukecreator@gmail.com, Credit: https://www.flaticon.com/
        </p>
      </footer>
    </BrowserRouter>
  );
};

export default App;
