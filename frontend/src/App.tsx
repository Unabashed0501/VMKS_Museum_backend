import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MKSIntroPanel from "./panels/MKSIntroPanel/MKSIntroPanel";
import OpeningHoursPanel from "./panels/OpeningHoursPanel/OpeningHoursPanel";
import PathPanel from "./panels/PathPanel/PathPanel";
import MaterialViewPanel from "./panels/MaterialViewPanel/MaterialViewPanel";
import FavoriteLinksPanel from "./panels/FavoriteLinksPanel/FavoriteLinksPanel";
import AnnouncementPanel from "./panels/AnnouncementPanel/AnnouncementPanel";

const Home: React.FC = () => <div>Home Page</div>;
const MapGuide: React.FC = () => <div>Map Guide Page</div>;
const Forum: React.FC = () => <div>Forum Page</div>;
const Unknown: React.FC = () => <div>Unknown Page</div>;
const UsersGuide: React.FC = () => <div>Users Guide Page</div>;

const App: React.FC = () => {
  return (
    <Router>
      <div className="logo">
        <img src="./assets/vmks_logo.jpg" alt="Website Logo" />
      </div>

      <NavBar />

      <div className="grid-container">
        <div className="left-panel">
          <div className="extensible-panel">
            <PathPanel />
          </div>
          <div className="extensible-panel">
            <MKSIntroPanel />
          </div>
          <div className="extensible-panel">
            <MaterialViewPanel />
          </div>
        </div>

        <div className="middle-panel">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map-guide" element={<MapGuide />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/unknown" element={<Unknown />} />
            <Route path="/users-guide" element={<UsersGuide />} />
          </Routes>
        </div>

        <div className="right-panel">
          <div className="extensible-panel">
            <AnnouncementPanel />
          </div>
          <div className="extensible-panel">
            <FavoriteLinksPanel />
          </div>
          <div className="extensible-panel">
            <OpeningHoursPanel />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
