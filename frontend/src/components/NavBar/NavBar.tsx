// NavBar.tsx
import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const styles: {
    nav: React.CSSProperties;
    ul: React.CSSProperties;
    li: React.CSSProperties;
    link: React.CSSProperties;
    linkHover?: React.CSSProperties;
  } = {
    nav: {
      position: "fixed",
      top: 0,
      right: 0,
      backgroundColor: "rgba(135, 206, 250, 0.5)",
      padding: "10px 20px",
      borderBottomLeftRadius: "20px",
      zIndex: 1000,
    },
    ul: {
      listStyleType: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      gap: "15px",
    },
    li: {
      display: "inline",
    },
    link: {
      padding: "10px 15px",
      textDecoration: "none",
      color: "#d3d4de",
      borderRadius: "5px",
      transition: "background-color 0.3s",
    },
    linkHover: {
      backgroundColor: "#3f3f4f",
    },
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/map-guide" style={styles.link}>
            Map Guide
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/forum" style={styles.link}>
            Forum
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/unknown" style={styles.link}>
            Unknown
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/users-guide" style={styles.link}>
            Users Guide
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
