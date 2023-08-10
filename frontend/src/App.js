import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map-guide" element={<MapGuide />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/unknown" element={<Unknown />} />
          <Route path="/users-guide" element={<UsersGuide />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

function MapGuide() {
  return <h2>This is the Map Guide Page</h2>;
}

function Forum() {
  return <h2>Welcome to the Forum Page</h2>;
}

function Unknown() {
  return <h2>This is an Unknown Page</h2>;
}

function UsersGuide() {
  return <h2>This is the Users Guide Page</h2>;
}

export default App;
