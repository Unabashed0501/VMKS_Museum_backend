import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map-guide" element={<MapGuide />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/unknown" element={<Unknown />} />
        <Route path="/users-guide" element={<UsersGuide />} />
      </Routes>
    </Router>
  );
};

const Home: React.FC = () => <div>Home Page</div>;
const MapGuide: React.FC = () => <div>Map Guide Page</div>;
const Forum: React.FC = () => <div>Forum Page</div>;
const Unknown: React.FC = () => <div>Unknown Page</div>;
const UsersGuide: React.FC = () => <div>Users Guide Page</div>;

export default App;
