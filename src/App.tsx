import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/Work";
import Profile from "./components/Profile";

const App = () => {
  return (
    <BrowserRouter basename="/sy-portfolio">
      <div>
        <nav>
          <Link to="">Home</Link> / <Link to="/profile">Profile</Link> /{" "}
          <Link to="/work">Work</Link>
        </nav>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
