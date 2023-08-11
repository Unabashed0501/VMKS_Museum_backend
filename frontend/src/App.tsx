import React, { ReactNode } from "react";
import "./App.css";
import "./assets/vmks_logo.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Resizable } from "re-resizable";

import NavBar from "./components/NavBar/NavBar";
import MKSIntroPanel from "./panels/MKSIntroPanel/MKSIntroPanel";
import OpeningHoursPanel from "./panels/OpeningHoursPanel/OpeningHoursPanel";
import PathPanel from "./panels/PathPanel/PathPanel";
import MaterialViewPanel from "./panels/MaterialViewPanel/MaterialViewPanel";
import FavoriteLinksPanel from "./panels/FavoriteLinksPanel/FavoriteLinksPanel";
import AnnouncementPanel from "./panels/AnnouncementPanel/AnnouncementPanel";
import Draggable from "react-draggable";

// ... other imports ...
interface DraggableWrapperProps {
  children: ReactNode;
}

const DraggableWrapper: React.FC<DraggableWrapperProps> = ({ children }) => (
  <Draggable axis="y" bounds="parent">
    <div style={{ width: "100%", height: "100%" }}>{children}</div>
  </Draggable>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="logo">
        <img src={require("./assets/vmks_logo.png")} alt="Website Logo" />
      </div>
      <NavBar />

      <div className="grid-container">
        <DraggableWrapper>
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
        </DraggableWrapper>

        <DraggableWrapper>
          <div className="middle-panel">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/map-guide" element={<MapGuide />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/unknown" element={<Unknown />} />
              <Route path="/users-guide" element={<UsersGuide />} />
            </Routes>
          </div>
        </DraggableWrapper>

        <DraggableWrapper>
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
        </DraggableWrapper>
      </div>
    </Router>
  );
};

const Home: React.FC = () => <div>Home Page</div>;
const MapGuide: React.FC = () => <div>Map Guide Page</div>;
const Forum: React.FC = () => <div>Forum Page</div>;
const Unknown: React.FC = () => <div>Unknown Page</div>;
const UsersGuide: React.FC = () => <div>Users Guide Page</div>;

export default App;
